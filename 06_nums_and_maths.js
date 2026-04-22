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

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-PK"));

//number properties->EPSILON isFinite,isInteger,isNaN,isSafeInteger,lenght,
// MAX_SAFE_INTEGER,MAX_VALUE,MIN_SAFE_INTEGER,MIN_VALUE

//***************************************Maths************************************
console.log(Math);
//Math Functions

//Math.abs ->abs mean absolute minus values ko positive karta ha.positive ko negative nahi karta.
console.log(Math.abs(-4));

//round ->points values ko roundoff karta ha
console.log(Math.round(7.5768));

//ceil->value upper hi choose kary ga 4.2 ha answer 5 aye ga
console.log(Math.ceil(4.2));

//floor->value small aye.decimal hata deta ha e.g;4.67->4
console.log(Math.floor(7.7));

//min->array k andar sab se lowest value konsi ha .vo find kar k batay ga
console.log(Math.min(4, 6, 1, 8, 5));

//max->array k andar sab se large value konsi ha .vo find kar k batata ha.
console.log(Math.max(6, 6, 9, 1, 6, 9));

//Math.random->games k andar use hota ha random number generate karny k liye.
// (Math.random 0 or 1 k andar value deti ha)
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//1. Math.random()
// console.log(Math.random());
// Yeh 0 se le kar 1 ke beech random decimal number deta hai
// 0 include hota haias
// 1 include nahi hota
// Example output:
// 0.34567
// 0.91234

// 2. Math.random() * 10
// console.log(Math.random() * 10);
// Range ab ho gayi:
// 0  → 9.999...
// Example:
// 3.45
// 7.89
// Matlab ab 10 tak random value mil rahi hai (but decimal me)

// 3. Math.random() * 10 + 1
// console.log(Math.random() * 10 + 1);
//  Range shift ho gayi:
// 1 → 10.999...
//  Matlab:
// Minimum = 1
// Maximum ≈ 11 (but exact 11 nahi)

// 4. Math.floor(Math.random() * 10) + 1
// console.log(Math.floor(Math.random() * 10) + 1);
// Ab important part
// Step by step:
// Math.random() * 10
// → 0 to 9.999
// Math.floor(...)
// → decimal hata deta hai
// → 0 to 9
// +1
// → 1 to 10
// Final output:
// 1, 2, 3, ..., 10
// Yeh perfect dice logic hai

// 5. Custom Range (10 to 20)
// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Yeh sabse important formula hai
//  Step by Step samjho:
// 1. (max - min + 1)
// 20 - 10 + 1 = 11
// Total numbers = 11
// (10, 11, 12 ... 20)
// 2. Math.random() * 11
// 0 → 10.999
// 3. Math.floor(...)
// 0 → 10
// 4. + min (10)
// 10 → 20
// Final Output:
// 10, 11, 12, ..., 20

// Final Formula
// Math.floor(Math.random() * (max - min + 1)) + min;
// Use cases:
// Games
// OTP generation
// Dice roll
// Random quiz question
// Common Mistake
// Math.random() * (max - min) + min
// Isme max include nahi hota
