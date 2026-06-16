//Conversions
//Two Ways:
//Explicit conversion(Done by you) Like Number(),String(),Boolean()
//Implicit conversion(Done Authomatically)
//"33" =>33
//"33abc" => NaN
//true =>1; false =>0
let score = "33";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//1=> true; 0=>false
//"" => false
//"sara" => true
let isLoggedIn = 1;
let BooleanIsLogged = Boolean(isLoggedIn);
console.log(BooleanIsLogged);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//Operations
let value = 4;
let negValue = -value;
console.log(negValue); //-4

let str1 = "Sara";
let str2 = " Ashfaq";
let str3 = str1 + str2;
console.log(str3); //Sara Ashfaq

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 3); //123  agar sab se pehly string ha to sab ko hi string bana diya jaye ga 
console.log(1 + 2 + "3"); //33   agar string last mein ha to pehly waly numbers k conversion hogi or baki plus karein gay 
console.log((3 + 4) * 5% 3); //correct way  //2
console.log(3 + 4 * 5 % 3); //wrong way   //5
console.log(+true);  //1
console.log(+"");   //0
// console.log(true+);  //error

let gameCounter=100
++gameCounter;
console.log(gameCounter);

//Postfix Increment x++ (usage k baad values increment hoti)
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

//Prefix Increment  ++x  (values pehly increment hojati hain )
let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



// Background mein kya hua?
// let x = 3; line par x ki value 3 set ho gayi.
// const y = x++; line par do kaam hue:
// Pehle (Usage): JavaScript ne x ki current value (3) uthai aur use y ke andar assign (store) kar diya. 
// Is wajah se y ki value 3 ho gayi.
// Baad mein (Increment): y ko value dene ke fauran baad, x ne khud ko 1 se badha liya (3 + 1). 
// Is wajah se x ki value 4 ho gayi.
// Jab console print hua, to x barbad hokar 4 ban chuka tha, lekin y purani value 3 par hi tha.


// Background mein kya hua?
// let a = 3; line par a ki value 3 set ho gayi.
// const b = ++a; line par do kaam hue:
// Pehle (Increment): Plus signs (++) pehle lage hain, isliye JavaScript ne sabse pehle a ki value ko 
// turant badha kar 4 kar diya (3 + 1).
// Baad mein (Usage): Ab jo nayi badhi hui value hai (4), wo jaakar b ke andar assign (store) ho gayi.
// Is wajah se a aur b dono ke paas ab bilkul nayi value 4 maujood hai.