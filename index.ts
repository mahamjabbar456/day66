/***************
 * UNION TYPES *
 ***************/

let myVar :string | number;
myVar = "John";
console.log(myVar);
myVar = 20;
console.log(myVar);

/*****************
 * LITERAL TYPES *
 *****************/

function printStatus(status:"success"|"failure"){
    console.log(`Status is ${status}`);
}
  
printStatus("success"); 

function addnumber(num:1|2|3|4|5){
    console.log(`Number is ${num}`);
}

addnumber(5);
addnumber(3);

/******************
 * NULLABLE TYPES *
 ******************/

let name:string|null = "John";
let number:number|null = 18;
function greeting(username:string|null){
    if(username==null){
        console.log("Hello , member")
    }
    else{
        console.log(`Hello,${username}`);
    }
}

greeting("John");
greeting(null);

/**************
 * TYPE ALIAS *
 **************/

type student = {
    name:string,
    age:number,
    address:string
}

const John:student = {
    name:"John",
    age:19,
    address:"Pakistan"
}

const bob:student = {
    name:"Bob",
    age:17,
    address:"Dubia"
}

console.log(John);
console.log(bob);

/*********************
 * INTERSECTION TYPE *
 *********************/

type introduction = {
    name:string,
    age:number
}

type HomeDetail = {
    phone:number,
    address:string
}

type information = introduction & HomeDetail;

const Alice:information = {
    name:"Alice",
    age:19,
    phone:937592874983,
    address:"Saudia Arabia"
}

console.log(Alice);