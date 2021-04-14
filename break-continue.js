const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [5, -4, 2, -9, 6, -7, 3, 9, -6, 1, 4];

// break
for(let i = 0; i < array1.length; i++){
    if(array1[i] > 5){
        break;
    }
    console.log(array1[i]);
}

console.log("\n========================== \n")

// continue
for(let i = 0; i < array2.length; i++){
    if(array2[i] < 0){
        continue;
    }
    console.log(array2[i]);
}

