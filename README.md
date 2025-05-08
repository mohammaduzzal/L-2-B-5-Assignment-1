# Understanding `interface` vs `type` in Typescript
In TypeScript, interfaces and types are both used to define the shape of data, but they have distinct characteristics and use cases.

##  Interface vs Type: What’s the Real Difference?

### 1. Syntax and Declaration
        interface :Declared using the `interface` keyword
              interface Person{
                      name: string;
                      age: number;
                     }

        type:Declared using the `type` keyword  
                type Peron ={
                    name : string;
                    age  : number;
                }           

### 2. Extensibility
        interface :you can redeclare the same interface to add new properties
        interface Person {
             name: string;
             }

        interface Person {
            age: number;
        }
       // Result: Person has both name and age

      type:redeclaring a type with the same name causes an error. However, you can extend types using intersections (&).

      type Person = { name: string };
      type ExtendedPerson = Person & { age: number };

### 3. Flexibility and Use Cases
       Interface: Primarily used for defining object shapes, though it can extend other interfaces or types. It’s less flexible for non-object types.

        interface Id extends Record<string, unknown> {
             id: string;
             }

       Type: More versatile, as it can define:
            Primitive types: type Id = string;
            Union types: type Status = "success" | "error";
            Intersection types: type Combined = TypeA & TypeB;
            Complex types: type Func = (x: number) => string; 


 ###  When to Use What?
        Use interface for object-oriented/class-based code.
        Use type for unions, intersections, and primitives.


# the use of the `keyof` keyword in TypeScript 
    keyof extracts keys of an object type as a union of string literals.Ensure that only valid keys of an object are used.Combine with other TypeScript features like mapped types to transform or constrain types.keyof boosts reusability and type safety.


 ### Example : 
           type User = {
                   name: string;
                   age: number;
                   isAdmin: boolean;
                  };

            type UserKeys = keyof User;  // 'name' | 'age' | 'isAdmin'




            function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
                            return obj[key];
                                }

                    const user: User = {
                              name: "Bright",
                              age: 25,
                              isAdmin: false,
                                   };

                      const username = getProperty(user, "name"); // Bright
                      const isUserAdmin = getProperty(user, "isAdmin"); // false

           
         

