
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