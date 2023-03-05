//1. Write a JavaScript function that reverse a number. 
//Example x = 32243;
//Expected Output: 34223 

function reverseNumber(x) {
     let result = 0;
     while (x) {
         let mod = x % 10;
         result = result * 10 + mod;
         x = Math.floor(x / 10);
     };
     return result
 };
 console.log(reverseNumber(32243));

//2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function if_palindrome(x){
    const trim = x.replace(/\s/g, '');
    const reverse = trim.split('').reverse().join('');
    return trim == reverse;
}
console.log(if_palindrome("aba"));

//3. Write a JavaScript function that generates all combinations of a string. 
//Example string: 'dog' 
//Expected Output: d, do, dog, o, og, g 

function allCombination(x) {
     let result = [];
     for (let i = 0; i <= x.length; i++) {
         for (let j = i + 1; j <= x.length; j++) {
             result.push(x.slice(i, j))
         }
     }
     return result;
 }

 console.log(allCombination('afsf'));

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//Example string: 'webmaster' 
//Expected Output: 'abeemrstw'
//Assume punctuation and numbers symbols are not included in the passed string.

function alphabetical_order(x){
    return x.split('').sort().join('');
}
console.log(alphabetical_order("dsaf"));

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//Example string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox '

function firstUpper(x) {
     let arr = x.split(' ')
     for (let i in arr) {
         if (arr[i].length) {
             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
         };
     };
     arr = arr.join(' ');
     return arr;
 }

 console.log(firstUpper('the quick brown fox'))

 //6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
 //Example string: 'Web Development Tutorial' 
 //Expected Output: 'Development'

function theLongestWord(x) {
     let str = x.split(' ')
     resultIdx = 0
     maxLength = 0
     for (let i in str) {
         if (str[i].length > maxLength) {
             maxLength = str[i].length;
             resultIdx = i;
         };
     };
     return str[resultIdx];
 }

 console.log(theLongestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
//Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
//Example string: 'The quick brown fox' 
//Expected Output: 5

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase();

        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels('The quick brown fox'));

//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function if_prime(x){
    if(x < 2) return false;
    for(let i = 2; i < x; i++){
        if(x % i == 0) return false;
    }
    return true;
}
console.log(if_prime(17));

//9. Write a JavaScript function which accepts an argument and returns the type. 
//Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(x) {
     return typeof x;
 };

 console.log(getType(undefined))

 //10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

 function identityMatrix(n) {
    idMatrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            if (i == j) {
                row.push(1);
            }
            else {
                row.push(0);
            }

        }
        idMatrix.push(row)
    }
    return idMatrix;
}

console.log(identityMatrix(4));

//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
//Sample array: [1,2,3,4,5]
//Expected Output: 2,4 

function findSecndNumbers(list) {
    const res = [];
    list.sort();
    res.push(list[1]);
    res.push(list[list.length - 2]);
    return res;
  }
  console.log(findSecndNumbers([1,2,3,4,5]));

  //12. Write a JavaScript function which says whether a number is perfect. 
  //According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
  //Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
  
  function isPerfectNum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return (sum === n);
}

console.log(isPerfectNum(6));

//13. Write a JavaScript function to compute the factors of a positive integer. 
function findFactor(num) {
    let factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

console.log(findFactor(10))

//14. Write a JavaScript function to convert an amount to coins. 
//Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
//Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
//Output: 25, 10, 10, 1

function amountTocoins(amount, coins){
    let ret = [];
    while(amount > 0){
        for(let i = 0; i < coins.length; i++){
            if(amount - coins[i] >= 0){
                amount = amount - coins[i];
                ret.push(coins[i]);
                break;
            }
        }
    }
    return ret;
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]))

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

function exponent(a, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = a * result;
    }
    return result;
  }
  console.log(exponent(5, 4));

  //16. Write a JavaScript function to extract unique characters from a string. 
  //Example string: "thequickbrownfoxjumpsoverthelazydog"
  //Expected Output: "thequickbrownfxjmpsvlazydg"
  
  function uniqueCharacters(str) {
    let array = str.toLowerCase().split("");
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray.join("");
  }
  
  console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

 //17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

 function occurrences_of_letter(x){
    x = x.match(/[a-zA-Z]/g);
    let map = new Map();
    for(let i = 0; i < x.length; i++){
        if(!map.has(x[i])) map.set(x[i],1);
        else map.set(x[i], map.get(x[i])+1);
    }
    return map;
}
 console.log(occurrences_of_letter("afdasfd"));

 
//18. Write a function for searching JavaScript arrays with a binary search. 
//Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binary_search(arr, x){
    let low = 0, high = arr.length-1;
    while(low < high){
        let mid = low + Math.floor((high-low)/2); 
        if(x > arr[mid]) low = mid + 1;
        else high = mid;
        
    }
    return x == arr[high]? high : false;
}

console.log(binary_search([1,4,6,7,8,9,17,20,13],9));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
function count_occur(str,letter){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == letter) count += 1;
    }
    return count;
}
console.log(count_occur("microsoft.com","o"));

//23. Write a JavaScript function to find the first not repeated character. 
//Sample arguments: 'abacddbec' 
//Expected output: 'e' 

function notRepeated(str) {
    let array = str.toLowerCase().split("");
    let count = 0;
    let result = "";
    for (let i = 0; i < array.length; i++) {
      count = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
          count++;
        }
      }
      if (count < 2) {
        result = array[i];
        break;
      }
    }
    return result;
  }
  
  console.log(notRepeated("abacddbec"));

  //24. Write a JavaScript function to apply Bubble Sort algorithm. 

  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([2,11,23,43,12,5]));






