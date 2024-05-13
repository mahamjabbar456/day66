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
export {};
