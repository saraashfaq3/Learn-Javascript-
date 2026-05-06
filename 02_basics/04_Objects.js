//Object constructor
// const tinderuser=new Object()   //singleton object
// console.log(tinderuser);

const tinderusers = {}; //non singleton object
tinderusers.id = "123abc";
tinderusers.name = "sara";
tinderusers.isLoggedIn = false;
console.log(tinderusers); //{ id: '123abc', name: 'sara', isLoggedIn: false }

//nested object
const regularUser = {
  email: "sara@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sara",
      lastname: "ashfaq",
    },
  },
};
console.log(regularUser.fullname?.userfullname); //{ userfullname: { firstname: 'sara', lastname: 'ashfaq' } }

//Optional Chaining (?) agar fullname exist hi nahi karta ho to jab api's se response ata ha to ?
// use karty warna if else lagany pary gay.

//Merge/combine objects
//Object.assign()  ->static method copies all enumerable own properties
//from one or more objects to a target object.
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
//const obj3={obj1,obj2}  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//spread operator
const obj3 = { ...obj1, ...obj2 }; //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);

//database se jo values ati ha vo is tarha ati hain
const users = [
  {
    id: 1,
    email: "sara@gmail.com",
  },
  {
    id: 2,
    email: "laiba@gmail.com",
  },
  {
    id: 3,
    email: "zaima@gmail.com",
  },
];
//first user k email access karna ha
(users[0].email)
console.log(tinderusers);  //{ id: '123abc', name: 'sara', isLoggedIn: false }
console.log(Object.keys(tinderusers));  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderusers));  //[ '123abc', 'sara', false ]
console.log(Object.entries(tinderusers));  //[ [ 'id', '123abc' ], [ 'name', 'sara' ], [ 'isLoggedIn', false ] ]

//objects k andar pura loop through kar rahy ha or phir aik pura value nikaal rahy hain to value nikalty
//time kai baar vo value exist hi nahi karti to agar value exixt hi nahi karti to crash hony k chances
//hain to ya manual us ko dekho ya phir us se pouch lo k kiya ap k pass ya value ha.
console.log(tinderusers.hasOwnProperty('isLoggedIn'));



