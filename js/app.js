'use strict';

// TODO Explain why 


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


