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

// Another example : Combine User and Account Data

// You are building a user management system and you have two TypsScript types : 

// User: Represent basic user information, with the following properties

// Id(number): The user's unique identifier
// name(string): The user's name.
// email(string):The user's email address.

// Account: Contains details about the user's account, with the following properties:
// accountId (number): The account's unique identifier.
// accountType(string): The type of the account (e.g., "Savings", "Checking",etc.).
// balance(number): The account balance.

// Your task is to create a function called combineUserAndAccount that takes a user object and an Account object as arguments and returns a new object representing the combined information of the user and their account.

type User = {
    id:number;
    name:string;
    email:string;
}

type Account = {
    accountId : number;
    accountType : string;
    balance : number;
}

const CombinedUserAndAccount = (use:User,account:Account):User & Account =>{
    return {...use,...account};
}

let information:User = {
    id:45,
    name:"john",
    email:"john@gmail.com"
}

let AccountDetail:Account = {
    accountId:485574,
    accountType:"Saving",
    balance:450000
}

let CompleteInfo :User & Account = CombinedUserAndAccount(information,AccountDetail);
console.log(CompleteInfo);