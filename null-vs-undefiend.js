let testVariable1;
console.log("Variable not set:", testVariable1);
//==================================================

let testVariable3 = undefined;
console.log("Set the variable value by undefined keyword: ", testVariable3);
//==========================================================

let testArray = [1,2,3,4,5];
console.log("Out of range from this array:", testArray[10]);
//============================================================

let testObject = {friend1: "Sajal", friend2: "Rahman", friend3: "Khayer"}
console.log("There have no property in this Object that name friend4:", testObject.friend4);
//============================================================

function add(num1, num2){
    //console.log(num1 + num2);
    num1 + num2;
    //return
}
//==========================================

const result = add(5,7);
console.log("Function not return: ", result);
//============================================

function add2(num3, num4){
    return num3 + num4;
}
const result2 = add(15);
console.log("When function called and any parameter value not pass:", result2);
//=================================================

let testVariable2 = null;
console.log("Set the variable value by null:", testVariable2);

