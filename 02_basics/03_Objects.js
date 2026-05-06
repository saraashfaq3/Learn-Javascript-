//Objects ko declared karny k 2 methods hain:
//literal
//constructor
//singleton(object ko agar literal ki tarha declared karein to singleton nahi banta ha or
// agar constructor se banay ga to phir singleton bany ga)

//Objects literals
const mySym = Symbol("key1");
const JsUser = {
  name: "Sara",
  "full name": "Sara Ashfaq",
  [mySym]: "mykey1",
  age: 20,
  location: "sahiwal",
  email: "sara@gmail.com",
  isloggesIn: false,
  lastLoggedInDays: ["monday", "tuesday"],
};
console.log(JsUser.email); //sara@gmail.com
console.log(JsUser["email"]); //sara@gmail.com
console.log(JsUser["full name"]); //Sara Ashfaq
console.log(JsUser[mySym]); //mykey1

//Object freeze
JsUser.email="ali@gmail.com"
// Object.freeze(JsUser) //koi bhi value ko change na kar saky
JsUser.email="aliahmad@gmail.com"
console.log(JsUser);


/*{
  name: 'Sara',
  'full name': 'Sara Ashfaq',
  age: 20,
  location: 'sahiwal',
  email: 'ali@gmail.com',
  isloggesIn: false,
  lastLoggedInDays: [ 'monday', 'tuesday' ],
  Symbol(key1): 'mykey1'
}*/

//functions
JsUser.greeting=function(){
  console.log("Hello Js user");
}
console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting());

//String Interpolation (same object ko referrence karna ha to this use karein gay)
JsUser.greetingTwo=function(){
  console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greetingTwo());
