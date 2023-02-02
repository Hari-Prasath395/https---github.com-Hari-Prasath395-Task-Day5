//Print odd numbers in an array

(function (array) {
  array.forEach(function (number) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Ans:1 3 5 7 9

/*=======================================================================================*/

//Convert all the strings to title caps in a string array

(function (strArray) {
  let upperCaseStr = strArray.map(function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });

  console.log(upperCaseStr);
})(["welcome", "to", "java", "class"]);

//Ans:[ 'Welcome', 'To', 'Java', 'Class' ]

/*======================================================================================*/
//Sum of all numbers in an array

(function (sumArray) {
  let total = sumArray.reduce(function (acc, ind) {
    return acc + ind;
  });
  console.log(total);
})([1, 2, 3, 4, 5])(
  //Ans : 15

  /*======================================================================================*/

  //Return all the prime numbers in an array

  function (arr) {
    let primeNumbers = arr.forEach(function (number) {
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
  }
)([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/*=====================================================================================*/
//Return all the palindromes in an array
(function (words) {
  let palindrome = words.filter(function (word) {
    let reverseWord = word.split("").reverse().join("");
    return word === reverseWord;
  });
  console.log(palindrome);
})(["hello", "world", "Rombo", "level", "rotor"]);

/*======================================================================================*/
//Rotate an array by k times

(function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})([1, 2, 3, 4, 5], 2);

/*====================================================================================*/
//Return median of 2 sorted arrays of same size

(function (arr1, arr2) {
  let combined = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }
  let mid = Math.floor(combined.length / 2);
  if (combined.length % 2 === 0) {
    return (combined[mid - 1] + combined[mid]) / 2;
  }
  return combined[mid];
})([1, 9, 5], [2, 9, 6]);

/*===================================================================================*/
//Remove duplicates from an Array

(function (arr) {
  let result = [];
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = true;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
})([1, 2, 3, 1, 4, 5, 2]);
