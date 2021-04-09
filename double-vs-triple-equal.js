const testVariable1 = 2;
const testVariable2 = "2";
const testVariable3 = 2;
//======================================
if(testVariable1 == testVariable2){
    console.log("Condition is true.");
}
else{
    console.log("Condition is false.");
}
//======================================

if(testVariable1 == testVariable3){
    console.log("Condition is true.");
}
else{
    console.log("Condition is false.");
}
//========================================

if(testVariable1 === testVariable2){
    console.log("Condition is true.");
}
else{
    console.log("Condition is false.");
}
//========================================

if(testVariable1 === testVariable3){
    console.log("Condition is true.");
}
else{
    console.log("Condition is false.");
}

// const value1 = 0;
// const value2 = 1;
// const value3 = true;
// const value4 = false;

console.log("0 == true:", 0 == true);
console.log("0 == false:", 0 == false);

console.log("1 == true:", 1 == true);
console.log("1 == false:", 1 == false);

console.log("0 === true:", 0 === true);
console.log("0 === false:", 0 === false);

console.log("1 === true:", 1 === true);
console.log("1 === false:", 1 === false);

