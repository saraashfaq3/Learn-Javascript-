//Kis tarha se data ko memory mein rakha jata ha or access kiya jata ha?
//Two catagories:

//Primitive(call by value (jab bhi copy karty hain to memory k original reference nahi diya jata
// bulky copy kar k diya jata ha or jo bhi changes hoti ha copy mein hoti ha ))
//7 types: string ,Number,Boolean,null,undefined,Symbol(kisi bhi value ko unique banany k liye symbol
//  use hota ha),BigInt

//Symbol
const id = Symbol("123"); //typeof Symbol
const anotherId = Symbol("123"); //typeof Symbol
console.log(id === anotherId);

//BigInt
const bigNumber = 657876876976576588767n;
console.log(typeof bigNumber); //bigInt

//Non Primitive (call by reference (memory k reference directly allocate kar diya jata ha))
//types:Array,Objects,Functions
//Array
const heros = ["sara", "laiba", "humza", "afnan", "zaima"]; //typeof object

//Object
let myObj = {
  ////typeof object
  name: "sara",
  age: 22,
};
//Function
const myFunction = function () {
  //typeof function
  console.log("hello world");
};
console.log(typeof myFunction);

//Javascript static type language ha ya dynamic type language?
// Answer: Dynamic type language

//****************************************************************************************************
//Humary pass 2 types ki memory hain:
//1.Stack(primitive) original value ki copy milti ha
//2.Heap(non-primitive) original value k reference milta ha

//Stack Example 
let myYoutubename = "saradotcom";
let anothername = myYoutubename;
// anothername = "myYoutubeChannel";
// console.log(myYoutubename);
console.log(anothername);

//Heap Example
let userOne = {
  email: "saraashfaqgmail.com",
  pass: 123,
};
let userTwo = userOne;
userTwo.email = "sara@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
