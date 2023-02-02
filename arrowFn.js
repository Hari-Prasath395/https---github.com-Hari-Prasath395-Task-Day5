//Print Odd numbers in an array
let numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.filter((num)=>num%2==1).forEach(num=>console.log(num));

/*======================================================================================*/

//Convert all the strings to title caps in a string array

let strArray =["hello","welcome","to","javascript"]
let result=strArray.map(string=>string.charAt(0).toUpperCase()+string.slice(1).toLowerCase());
console.log(result);

/*=======================================================================================*/
//Sum of all numbers in an array

let a = [1,2,3,4,5];

let sum = a.reduce((acc,ind)=> acc+ind);
console.log(sum);

/*=======================================================================================*/

//Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

/*=====================================================================================*/
//Return all the palindromes in an array

const palindrome = arr => {
    const isPalindrome = str => str === str.split('').reverse().join('');
  
    return arr.filter(str => isPalindrome(str));
  };
  
  palindrome(['rotor', 'hello', 'level', 'apple']);
          
  



  

