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