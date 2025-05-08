
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