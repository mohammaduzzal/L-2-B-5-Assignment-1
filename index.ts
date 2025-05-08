
function formatString(input:string, toUpper?:boolean):string{
    if(toUpper || toUpper == null){
        return input.toUpperCase()
    }else{
        return input.toLowerCase()
    }
}

// const result1 = formatString('hello');
// const result2 = formatString('hello',true);
// const result3 = formatString('hello',false);
// console.log(result3);

type Book ={
    title:string;
    rating: number;
};

function filterByRatting(items :Book[]):Book[]{
    const result = items.filter((item) => item.rating >= 4);
    return result;
}

const books :Book[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 2.0 },
    { title: "Book E", rating: 3.9 },
    { title: "Book F", rating: 5.0 },
  ];

//   const result = filterByRatting(books);
//   console.log(result);


function concatenateArrays<T>(...arrays : T[][]):T[]{
    const result : T[] = [];
    for(const array of arrays){
        result.push(...array)
    }
    return result;
}

// const arrayOfLetter1 = ['a','b'];
// const arrayOfLetter2 = ['c'];
// const result1 = concatenateArrays(arrayOfLetter1,arrayOfLetter2)
// console.log(result1);

// const arrayOfNumber1 = [1,2,3,4];
// const arrayOfNumber2 = [5,6,7,8,9];
// const result2 = concatenateArrays(arrayOfNumber1,arrayOfNumber2)
// console.log(result2);
