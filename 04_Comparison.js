//Basic Conversion
console.log(2 > 1); //true
console.log(2 >= 1);  //true
console.log(2 < 1);  //false
console.log(2 == 1); //false
console.log(2 != 1);  //true

//string & number conversion
console.log("2" >1);
console.log("02">1);

//null conversion
//Avoid null & undefined conversion
console.log(null>0);
console.log(null==0);
console.log(null>=0);

//the reason is that an equality check == and comparisons > < >= <= work differently.Comparison 
// convert null to a number ,treating it as 0. Thats why (3) null is true and (1) null>0 is false.

//undefined conversion
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
//comparison and equality check alag alag cheezein hain 

//strick check === 
// (values ko check karny k sath sath,strickly check bhi karta ha === ki help se )
console.log("2"==2);  //check
console.log("2"===2);  //strickly check





