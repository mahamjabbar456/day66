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