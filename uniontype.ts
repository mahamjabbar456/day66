/***************
 * UNION TYPES *
 ***************/

let myVar :string | number;
myVar = "John";
console.log(myVar);
myVar = 20;
console.log(myVar);

// Example of union
const DoubleValue =  (val:number|string):number | string=>{
    if(typeof val === "number"){
        return val*val;
    }
    else if(typeof val == "string"){
        return val.toLowerCase();
    }
    else{
        throw new Error("Invalid input");
    }
}

console.log(DoubleValue(4));
console.log(DoubleValue("JOHN"));
// console.log(DoubleValue(true));

// We want to create a function that formats the value passed to it in a specific way based on its type:
// If the input is a number, it should add a dollar sign and format it with two decimal places.
// If the input is a boolean, it should return "Yes" for true and "No" for false.
// If the input is a string, it should capitalize the first letter.

const PassDifferentArgument = (val:number|boolean|string): number | boolean | string =>{
    if(typeof val ==="number"){
        return Math.floor(val*100)/100;
    }
    else if(typeof val === "boolean"){
        return (val === true)?"Yes":"No"
    }
    else if(typeof val === "string"){
        return val.charAt(0).toUpperCase()+val.slice(1);
    }
    else{
        throw new Error("Invalid output");
    }
}
console.log(PassDifferentArgument(99.1249));
console.log(PassDifferentArgument("john"));
console.log(PassDifferentArgument(false));
