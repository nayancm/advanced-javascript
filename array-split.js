// Array slice
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array1Slice1 = array1.slice(2,5);

// Array splice
const array2 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const array2Splice1 = array2.splice(2,5);

// Array join
const array3 = [5, 10, 'five', 'ten', 15, 'fifteen', 'etc'];
const array3Join1 = array3.join(",");
const array3Join2 = array3.join(" ");
const array3Join3 = array3.join("-");

// Array slice output
console.log("After slicing array1:", array1Slice1);
console.log("After slicing original array1:", array1);

// Array splice output
console.log("After splicing array2:", array2Splice1);
console.log("After splicing original array2:", array2);

//Array joining output
console.log("After joining by ',' :", array3Join1);
console.log("After joining by ' ' :", array3Join2);
console.log("After joining by '-' :", array3Join3);

