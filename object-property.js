const students = [
{id: 112, name: "Rahim"},
{id: 113, name: "Karim"},
{id: 114, name: "Jamal"},
{id: 115, name: "Kamal"}
];

// using for loop
/*
const studentNames = [];
for(let i = 0; i < students.length; i++){
    const element = students[i];
    studentNames.push(element.name);
}
console.log("Student names:", studentNames);*/

// using map
const studentName = students.map(student => student.name);
console.log("Student Names:", studentName);

const studentId = students.map(student => student.id);
console.log("Student Ids:", studentId);

// using filter
const biggerId = students.filter(student => student.id > 113);
console.log("Bigger ids:", biggerId);

// using find
const biggerOne = students.find(student => student.id > 113);
console.log("Bigger One:", biggerOne);
