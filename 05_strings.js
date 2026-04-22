//Basic strings
//"Hello" + "world"
//Answer: Hello world

//In program string is written in variables->
const name = "sara";
const repoCount = 50;
console.log(name + repoCount + "value"); //This syntax is outdated don't use it.

//Use this string Interpolation-> is k andar methods bhi sath hi perform k sakty hain
// e.g; ${name.ToUperCase}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//String ko declared karny k aik or tarika bhi ha .string aik object ha.
const gameName = new String("sara-ashfaq-3"); //new aik keyword ha(objects use karty hain javascript k),
// ('')->constructor
//Answer:[String: 'sara'],positioning (0:s,1:a,2:r,3:a), prototype(methods)
console.log(gameName); //[String: 'sara']
//Methods
console.log(gameName[0]); //Keys access karny k tarika
console.log(gameName.__proto__);   //prototype access karny k tarika

//length
console.log(gameName.length);

//toUpperCase() toLowerCase()
console.log(gameName.toUpperCase());

//charAt
console.log(gameName.charAt(3));  //kis index/position per konsa character ha 

//indexOf
console.log(gameName.indexOf("r"));  //character kis position/index per ha 

//substring
const newString=gameName.substring(0,5);
console.log(newString);

//slice
const anotherSring=gameName.slice(-9,4)
console.log(anotherSring);

// Trim remove starting space and end space
const newStringOne="     sara     "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace (e.g;url mein %20 ko replace kardo - se)
const url="https://sara.com/sara%20saraashfaq"
console.log(url.replace('%20','-'));

//includes (kiya url mein sara likha how aha ya nahi)
console.log(url.includes('sara'));

//split()
console.log(gameName.split('-'));

//concat,blink,bold,constructor,endswith,fix

//concat (Strings ko join karta hai.)
let str1="hello";
let str2="world";
console.log(str1.concat(" ",str2," ","sara"));

//blink (Yeh purana HTML method hai (ab use nahi hota).) don't use
//bold(Text ko HTML bold bana deta hai.) don't use
//constructor(Yeh batata hai ke object kis type ka hai.)
//endsWith(Check karta hai ke string kisi specific word pe end hoti hai ya nahi.)
//fixed(Text ko fixed-width font me convert karta hai (HTML tag <tt>)) 




