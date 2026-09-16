let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

// Concatenate arr1 and arr2
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter even numbers from combinedArr
let evenNumbers = combinedArr.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Map to square each number in combinedArr
let squaredNumbers = combinedArr.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Reduce to find the sum of all numbers in combinedArr
let sum = combinedArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 55

// Find the maximum number in combinedArr
let maxNumber = Math.max(...combinedArr);
console.log(maxNumber); // Output: 10

// Find the minimum number in combinedArr
let minNumber = Math.min(...combinedArr);
console.log(minNumber); // Output: 1