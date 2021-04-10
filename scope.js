var testVariable1 = 10;
let testVariable4 = 30;

function add(num1, num2){
    console.log("Variable declar out of function but called in function:", testVariable1);
    num3 = 20;  
    console.log("This variable assign in function but nowhere declared:", num3);
    let result = num1 + num2;
    if(result > 5){
        var afterCheck = "Gater than five.";
        var afterCheck = "Gater than five next.";
        console.log(afterCheck);
    }
    console.log("Out of if condition:", afterCheck);
    return result;
}

function outerFun(){
    let testVariable2 = 100;
    function innerFun(){
        var testVariable3 = 200;
        console.log("Outer fun var + inner fun var =", testVariable2 + testVariable3);
    }
    innerFun();
    return testVariable2 + testVariable4; // here can not use testVariable3
}
console.log("Function Output:", add(4,5));
console.log("Outer Function Output:", outerFun());
//console.log("Inside function of variable declared by var keyword:", testVariable2);
//innerFun(); can not access
//console.log("By var keyword declared variable if condition:", afterCheck); // can not
