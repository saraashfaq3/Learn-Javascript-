/*In JavaScript, an array is a global Array object used to store an ordered collection of 
multiple values under a single variable name. 
Key Characteristics:
1. Zero-Indexed: The first element is at index 0, the second at index 1, and so on.
2. Heterogeneous: A single array can store a mix of different data types, such as numbers,
strings, objects, or even other arrays.
3. Dynamic Size: Arrays are resizable; they can grow or shrink automatically as you add or remove elements.
4. Special Object: Technically, arrays are a special type of JavaScript Object that use numbered indexes
instead of named keys.
//Shallow copy
A shallow copy is an object is a copy whose properties share the same references 
(jo changes hogi vo original array mein bhi ho gi.)
//Deep copy
A deep copy of an object is a copy whose properties donot share the same reference.
(jo changes ho gi new array mein hi hogi orignal array mein nahi)
*/

//Array defined karny k methods.
const myArr = [0, 1, 2, 3, 4, "sara", 5];
const myHeros = ["sara", "laiba", "Ali", "Afnan"];
const myArr2 = new Array(1, 2, 3, 4);
console.log("Answer is:", myArr[3]);
console.log("Answer is:", myHeros[3]);
console.log("Answer is:", myArr2[3]);

//Array Methods
//1.push() (values ko add kar deta ha array mein )
myArr.push(4);
myArr.push(6);

//2. pop() (array k andar se last value delete karna)
myArr.pop();
myArr.pop();
myArr.pop();

//3.unshift() (array k start mein value add kar deta ha.)
myArr.unshift(9);

//4.shift() (array k start se value delete karta ha)
myArr.shift();
console.log(myArr);

//5.includes() (questions k answers dena ki booleon)
console.log(myArr.includes(3));

//6.indexOf() (value k in dex batata ha agar koi asi value pouch li ha jo exist nahi karti tab
//answer -1 aye ga )
console.log(myArr.indexOf("sara"));

//7.join() (adds all the elements of an array into a string)
const newArr = myArr.join();
console.log(myArr); //[ 0, 1, 2, 3, 4, 'sara' ]
console.log(newArr); //0,1,2,3,4,sara

//8. slice() slice(start, end) (return a copy of an section of an array,slice new array create karti ha)
console.log("A", myArr); //A [ 0, 1, 2, 3, 4, 'sara' ]
const myn1 = myArr.slice(1, 3);
console.log(myn1); //[ 1, 2 ]
console.log("B", myArr); //B [ 0, 1, 2, 3, 4, 'sara' ]

//9. splice() splice(start, deleteCount, item1, ...) (Removes element from an array if necessary
//insert new elemnet in their place splice original array ko hi modify karti ha using ading ang removing)
console.log("C", myArr); //C [ 0, 1, 2, 3, 4, 'sara' ]
const myn2 = myArr.splice(1, 3);
console.log(myn2); //[ 1, 2, 3 ]
console.log("D", myArr); //D [ 0, 4, 'sara' ]
