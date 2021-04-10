// "use strict"
// const array1 = [1, 2, 3, 4, 5];
// const output = [];

// for(let i = 0; i < array1.length; i++){
//     const element = array1[i];
//     const result1 = element*element;
//     output.push(result1);
// }
// console.log(output);


// const obj1 = ["Nayan", "Engineer", 1425]

// obj1.map(function(a,b,c){
    //     console.log(a,b,c);
    // })


const array2 = [10, 20, 30, 40, 50];

// const res = array2.map(function(a){
//     // console.log(a);
//     return a*a;
// })
    
// console.log(res);

//const res2 = array2.map((element,index,array) => {return console.log(element,index,array)});

const res3 = array2.map(element => element * element);
console.log("Using map function:", res3);

const res4 = array2.filter(element => element > 20);
console.log("Using filter function:", res4);

const res5 = array2.find(element => element > 30);
console.log("Using find function:", res5);

