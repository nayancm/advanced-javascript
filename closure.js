function stopWatch(){
    let count = 0;
    return function innerFun(){  // Here function name not mandatory.
        count ++;
        return count;
    }
}

const clock1 = stopWatch();
const clock2 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock1());