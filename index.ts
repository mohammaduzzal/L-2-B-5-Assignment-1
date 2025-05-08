
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper == null) {
        return input.toUpperCase()
    } else {
        return input.toLowerCase()
    }
}

const result1 = formatString('hello');
const result2 = formatString('hello', true);
const result3 = formatString('hello', false);
// console.log(result3);

type Book = {
    title: string;
    rating: number;
};

function filterByRatting(items: Book[]): Book[] {
    const result = items.filter((item) => item.rating >= 4);
    return result;
}

const books: Book[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 2.0 },
    { title: "Book E", rating: 3.9 },
    { title: "Book F", rating: 5.0 },
];

const result4 = filterByRatting(books);
//   console.log(result4);


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const array of arrays) {
        result.push(...array)
    }
    return result;
}

const arrayOfLetter1 = ['a', 'b'];
const arrayOfLetter2 = ['c'];
const result5 = concatenateArrays(arrayOfLetter1, arrayOfLetter2)
// console.log(result5);

const arrayOfNumber1 = [1, 2, 3, 4];
const arrayOfNumber2 = [5, 6, 7, 8, 9];
const result6 = concatenateArrays(arrayOfNumber1, arrayOfNumber2)
// console.log(result6);

class Vehicle {
    private _make: string;
    private _year: number;

    constructor(make: string, year: number) {
        this._make = make;
        this._year = year
    }

    getInfo() {
        console.log(`Make : ${this._make} , Year : ${this._year}`);
    }
};

class Car extends Vehicle {
    private _model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year)
        this._model = model
    }

    getModel() {
        console.log(`Model : ${this._model}`);
    }
};

const myCar = new Car("Toyota", 2011, "Corolla");
// myCar.getInfo();
// myCar.getModel();



function processValue(value: string | number): number {
    return typeof value === 'string' ? value.length : value * 2;

}
const test1 = processValue('hello');
const test2 = processValue(10);
// console.log(test1);

interface Product {
    name: string;
    price: number;
};

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((acc, curr) => curr.price > acc.price ? curr : acc);
}

const products1: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
const products2: Product[] = []

const result7 = getMostExpensiveProduct(products1);
//   console.log(result7);



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

function getDayType(day: Day): string {
    switch (day) {
        case Day.Monday:
        case Day.Tuesday:
        case Day.Wednesday:
        case Day.Thursday:
        case Day.Friday:
            return "Weekday";
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";

    }

};

// console.log(getDayType(Day.Sunday));


async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error('Error: Negative number not allowed')
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n)
        }, 1000)
    })
};

async function testSquareAsync() {
    // console.log('data is coming.......');
    const result1 = await squareAsync(5)
    //   const result2 = await squareAsync(-5)
    console.log(result1);
};

// testSquareAsync();





