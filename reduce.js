const arrayOfNumber = [1,2,3,4];

const sum = arrayOfNumber.reduce((accumlator, currentValue)=>{
    return accumlator + currentValue;
});

console.log(sum);