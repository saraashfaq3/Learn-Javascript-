const marvel_heros = ["thor", "Ironmaan", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  //[ 'thor', 'Ironmaan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// use concat for combine two or more arrays
const allheros = marvel_heros.concat(dc_heros);
console.log(allheros); //[ 'thor', 'Ironmaan', 'spiderman', 'superman', 'flash', 'batman' ]

//use spread operator for combine two  or more arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); //[ 'thor', 'Ironmaan', 'spiderman', 'superman', 'flash', 'batman' ]

//flat() return a new array with all sub-array elements concatenated into it recursively up
//to the specified depth.
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); //[1, 2, 3, 4, 5,6, 7, 8, 9, 4,5]

//Data scraping (jab koi data select karty ha web page se to kai baar alag format mein ata ha
// like in th form of  node list,objects ,string, lakin chahiye to array or array k uper hi
// loop kar sakty )

//isArray (question karna k kiya array ha ya nahi)
console.log(Array.isArray("Sara")); //false

//from (agar array nahi ha to usy array mein convert karny k liye from us karein gay
//also for object,string)
console.log(Array.from("Sara")); //[ 'S', 'a', 'r', 'a' ]
console.log(Array.from({ name: "sara" })); //[] important for interviews

// of()  A set of elements to include in the new array object.Return a new array from a set of elements.
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
