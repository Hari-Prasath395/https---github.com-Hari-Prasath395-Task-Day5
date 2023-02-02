//Print odd numbers in an Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers
  .filter(function (number) {
    return number % 2 !== 0;
  })
  .forEach(function (oddNumber) {
    console.log(oddNumber);
  });

//Ans : 1 3 5 7 9

/*=======================================================================================*/
//Convert all the strings to title caps in a string array

let strings = ["welcome", "to", "java", "class"];

let upperCaseStr = strings.map(function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
});

console.log(upperCaseStr);

//Ans : [ 'Welcome', 'To', 'Java', 'Class' ]

/*=======================================================================================*/

//sumof all numbers in an Array

let values = [1, 2, 3, 4, 5];

let sum = values.reduce(function (Accumulator, currentValue) {
  return Accumulator + currentValue;
});

console.log(sum);
//Ans:15

/*=======================================================================================*/
//Return all the prime numbers in an array

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let primeNumbers = digits.filter(function (number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
});

console.log(primeNumbers);

//Ans:[2,3,5,7]

/*======================================================================================*/

//Return all the palindromes in an array

let words = ["hello", "world", "Rombo", "level", "rotor"];

let palindrome = words.filter(function (word) {
  let reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
});

console.log(palindrome);

//Ans:[ 'level', 'rotor' ]
/*======================================================================================*/

//Return median of 2 sorted arrays of same size

let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];

function median() {
  let mergedArray = [];
  let length = array1.length + array2.length;
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }

  if (length % 2 === 0) {
    return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
}
console.log(median);

/*======================================================================================*/
//Remove duplicates from an Array

var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

var removeDuplicates = function (arr) {
  return Array.from(new Set(arr));
};
console.log(removeDuplicates);

/*======================================================================================*/
//Rotate an array by k times

function rotateArray(array, k) {
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  return array;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
