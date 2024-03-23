// 19 Day Challenge :
console.log ("Day 19 Challenge");
// Question 55:
//  list of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Doubles each number
let doubleNum = numbers.map(number => number * 2);

console.log(doubleNum); 



// Question 56:
// array of list
let mixArray = [1, "apple" , 2, "banana" , true , "carrot"];
let stringsA = mixArray.filter(item => typeof item === "string");
console.log(stringsA); 


// Question 57:
// A list of grades
let grades: number[] = [96,45,67,87,95,58];

// grade prcess
let avgeGrade = grades.reduce((total,grade) => total + grade , 0 ) /grades.length;
console.log(avgeGrade); //average Grade


