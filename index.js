// 19 Day Challenge :
console.log("Day 19 Challenge");
// Question 55:
//  list of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Doubles each number
var doubleNum = numbers.map(function (number) { return number * 2; });
console.log(doubleNum);
// Question 56:
// array of list
var mixArray = [1, "apple", 2, "banana", true, "carrot"];
var stringsA = mixArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsA);
// Question 57:
// A list of grades
var grades = [96, 45, 67, 87, 95, 58];
// grade prcess
var avgeGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(avgeGrade); //average Grade
