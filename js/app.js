'use strict';

// The WHY:
// - To learn how you can invoke a function that returns an array, and treat that expression like the array it returns. For example, referencing an element by index like on line 22
// - To learn how you can use the return of one function, as the argument (or inputs) to another function invocation. For example, lines 30 & 31 that use the return of twoNumberArray() as the argument for addOneToFirst(), and the return of THAT is the argument to putItInAMessage()


console.log('proof of life');

function twoNumberArray() {
  return [3, 5];
}

let array1 = twoNumberArray();

console.log("array1 is:", array1);

console.log("array1 at index 1 is:", array1[1]);

// when you invoke a function, it is an expression. 
// twoNumberArray() returns [3, 5]
console.log("twoNumberArray() at index 0 is:", twoNumberArray()[0]);

// build a new array with the input array
// adding 1 to the first element
function addOneToFirst(arr) {
  return [arr[0] + 1, arr[1]];
}

console.log("twoNumberArray() after addOneToFirst() is: ", addOneToFirst(twoNumberArray()));
let addedOne = addOneToFirst(twoNumberArray());

function putItInAMessage(arr) {
  return `the first element is ${arr[0]} the second element is ${arr[1]}`;
}

console.log(putItInAMessage(addedOne));


