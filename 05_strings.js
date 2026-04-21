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
const gameName = new String("sara-ashfaq"); //new aik keyword ha(objects use karty hain javascript k),
// ('')->constructor
//Answer:[String: 'sara'],positioning (0:s,1:a,2:r,3:a), prototype(methods)
console.log(gameName); //[String: 'sara']
//Methods
console.log(gameName[0]); //Keys access karny k tarika
console.log(gameName.__proto__);   //prototype access karny k tarika
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));  //kis index/position per konsa character ha 
console.log(gameName.indexOf("r"));  //character kis position/index per ha 
const newString=gameName.substring(0,5);
console.log(newString);

const anotherSring=gameName.slice(-9,4)
console.log(anotherSring);





