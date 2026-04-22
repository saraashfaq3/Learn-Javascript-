//********************************Numbers*************************************
const score = 400;
console.log(score); //400
console.log(typeof score); //number

const balance = new Number(100);
console.log(balance); //[Number: 100]
console.log(typeof balance); //object
console.log(balance.toString().length); //3
console.log(balance.toFixed(1)); //100.0
const otherNumber = 123.55768;
console.log(otherNumber.toPrecision(3)); //124

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-PK'));

//number properties->EPSILON isFinite,isInteger,isNaN,isSafeInteger,lenght,
// MAX_SAFE_INTEGER,MAX_VALUE,MIN_SAFE_INTEGER,MIN_VALUE

//***************************************Maths************************************

