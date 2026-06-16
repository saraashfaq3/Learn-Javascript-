//JavaScript original documentation TC39.ES ECMAScript
// console.log("Sara");
// kasy variable mein constant declare hoty hain?
/*prefer not to use var
because of issue in block scope{} (if-else,conditional statment) and functional scope
*/
//let,var,const
const accountId =1444553
let accountEmail="sara@gmail.com"
var accountPassword="123"
accountCity="Sahiwal"
let accountState;
//accountId=2   //Not allowed TypeError: Assignment to constant variable.
accountEmail="laiba@gmail.com"
accountPassword="23435763"
accountCity="lahore"
// accountId=978458479  //Not allowed TypeError: Assignment to constant variable.
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

