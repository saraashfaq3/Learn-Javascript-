//Conversions
//"33" =>33
//"33abc" => NaN
//true =>1; false =>0
let score = "33abc";
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
console.log(negValue);

let str1 = "Sara";
let str2 = " Ashfaq";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 3); //123  agar sab se pehly string ha to bas ko hi string bana diya jaye ga 
console.log(1 + 2 + "3"); //33    agar string last mein ha to pehly waly numbers k conversion hi jaye ga
console.log((3 + 4) * 5% 3); //correct way  //2
console.log(3 + 4 * 5 % 3); //wrong way   //5
console.log(+true);  //1
console.log(+"");   //0
// console.log(true+);  //error
