"use strict";
// 100 Days Of Coding Challenge!
/* Day-67 Task
Learn about TypeScript arrays by using the following guide and coding along with the examples provided in it:

Type Annotations With Arrays in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-67/TS-Array/README.md */
//-------------------------------------------------------------------------------------------------------------------------------
/* Type Annotations With Arrays in TypeScript
1. Type Annotations With Arrays: TypeScript allows you to specify the type of elements that an array can contain.
This helps in ensuring type safety and avoiding errors during development. */
// Single Type Arrays: You can declare an array to contain elements of a specific type using two main syntaxes:
let numbers = [1, 2, 3, 4, 5];
let strings = ["hello", "world"];
// Both number[] and Array<number> are equivalent and specify that the array should only contain numbers.
//Example:
let fruits = ["apple", "banana", "strawberry"];
console.log(fruits); // Output: ["apple", "banana", "strawberry"]
//-------------------------------------------------------------------------------------------------------------------------------
/* 2. Type Annotations With Multidimensional Arrays: Multidimensional arrays are arrays that contain other arrays.
You can also specify the types of elements in these nested arrays. */
// Two-Dimensional Arrays:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Here, number[][] indicates an array of arrays, where each inner array contains numbers.
// Example:
let coordinates = [
    [0, 0],
    [1, 2],
    [3, 4]
];
console.log(coordinates); // Output: [[0, 0], [1, 2], [3, 4]]
// These type annotations help in maintaining the integrity of the data and catching errors early during development.
