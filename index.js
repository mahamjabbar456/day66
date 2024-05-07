/***************
 * UNION TYPES *
 ***************/
let myVar;
myVar = "John";
console.log(myVar);
myVar = 20;
console.log(myVar);
/*****************
 * LITERAL TYPES *
 *****************/
function printStatus(status) {
    console.log(`Status is ${status}`);
}
printStatus("success");
function addnumber(num) {
    console.log(`Number is ${num}`);
}
addnumber(5);
addnumber(3);
/******************
 * NULLABLE TYPES *
 ******************/
let name = "John";
let number = 18;
function greeting(username) {
    if (username == null) {
        console.log("Hello , member");
    }
    else {
        console.log(`Hello,${username}`);
    }
}
greeting("John");
greeting(null);
const John = {
    name: "John",
    age: 19,
    address: "Pakistan"
};
const bob = {
    name: "Bob",
    age: 17,
    address: "Dubia"
};
console.log(John);
console.log(bob);
const Alice = {
    name: "Alice",
    age: 19,
    phone: 937592874983,
    address: "Saudia Arabia"
};
console.log(Alice);
export {};
