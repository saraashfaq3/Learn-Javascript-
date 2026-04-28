//Dates
let myDate=new Date()   //date k object/date k instance
console.log(myDate.toString());  // Tue Apr 28 2026 01:10:02 GMT-0800 (GMT-08:00)
console.log(myDate.toDateString());   // Tue Apr 28 2026
console.log(myDate.toLocaleString());   // 4/28/2026, 1:10:02 AM
console.log(typeof myDate);  // object

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate);    // 2023-01-23T08:00:00.000Z
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreateDate=new Date (2023,0,23,5,3); 
console.log(myCreateDate.toLocaleString());  // 1/23/2023, 5:03:00 AM
console.log(myCreateDate.toLocaleDateString());  // 1/23/2023

//yy-mm-dd
let myYYDDMM=new Date("2023-01-14")
console.log(myYYDDMM.toLocaleString()); //1/13/2023, 4:00:00 PM

//mm-dd-yy
let date=new Date("01-14-2023")
console.log(date.toLocaleString()); //1/14/2023, 12:00:00 AM



//Timestamp