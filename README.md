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
 

