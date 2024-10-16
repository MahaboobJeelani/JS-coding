// console.log(2 != 2);


// function evenOrOdd(num){
//     if(num % 2 === 0){
//         return 'even'
//     }else{
//         return 'odd'
//     }
// }
// console.log(evenOrOdd(4));


// Nuture of Number

// function nutureOfNumber(num) {
//     if (num > 0) {
//         return 'positive'
//     } else if (num < 0) {
//         return 'negitive'
//     } else {
//         return 'zero'
//     }
// }
// console.log(nutureOfNumber(-0));

// Write a function that to help people calculate how many seconds are in a given number of minutes.

// function secondConvert(min) {
//     return min * 60
// }
// console.log(secondConvert(1) + " Seconds");

// console.log("apple" < "banana");

// let x = 10;
// x %= 3
// console.log(x);


// Temperature
// const temperature = 19

// if (temperature < 0) {
//     console.log('Its freezing outside.');
// } else if (temperature > 0 && temperature < 20) {
//     console.log('The weather is cool.');
// }
// else if (temperature > 21 && temperature < 30) {
//     console.log('The weather is warm.');
// } else {
//     console.log("It's hot outside.");
// }

// function isPalindrome(str) {
//     const palindrome = str.split('').reverse().join('')
//     if (str === palindrome) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isPalindrome("racecar1"));


// sign of Products
// function signOfProducts(a, b, c) {
//     const signProduct = a * b * c
//     if (signProduct > 0) {
//         return 1
//     } else if (signProduct < 0) {
//         return -1
//     } else {
//         return 0
//     }
// }
// console.log(signOfProducts(1, 3, 0));



// function checkSign(num1, num2, num3) {
//     let positiveCount = 0;
//     let negativeCount = 0;
//     if (num1 > 0) positiveCount++;
//     if (num2 > 0) positiveCount++;
//     if (num3 > 0) positiveCount++;

//     negativeCount = 3 - positiveCount;

//     if (positiveCount === 3) return "+++";
//     if (positiveCount === 2) return "++-";
//     if (positiveCount === 1) return "+--";
//     if (positiveCount === 0) return "---";
// }

// console.log(checkSign(num1, num2, num3));


// Example of using continue statement

for (var i = 1; i <= 5; i++) {
    if (i % 2 !== 0) {
        continue; 
        // console.log(i);
        
    }

    console.log("Iteration: " + i);
}

console.log("Exited the loop.");

// The Odd or Even Sum

// const arr = [1, 2, 3, 4, 5]
// let oddSum = 0
// let evenSum = 0
// for (let i = 1; i <= arr.length; i++) {
//     if (i % 2 === 0) {
//         evenSum += i
//     } else {
//         oddSum += i
//     }
// }

// console.log(oddSum, evenSum);


// The Grade Distributor

// let scores = [85, 92, 78, 65, 95]
// let gradeScore = { A: 0, B: 0, C: 0, D: 0, E: 0 }

// for (let score of scores) {
//     if (score >= 90) {
//         gradeScore.A++
//     }

//     if (score >= 80) {
//         gradeScore.B++
//     }

//     if (score >= 70) {
//         gradeScore.C++
//     }

//     if (score >= 60) {
//         gradeScore.D++
//     }

//     else {
//         gradeScore.E++
//     }
// }

// console.log(gradeScore);



// simple Calculator
// function simpleCalculator(num1, num2, sign) {
//     if (isNaN(num1) || isNaN(num2)) {
//         return "Please enter numeric values"
//     }
//     switch (sign) {
//         case "+": return num1 + num2; break;
//         case "-": return num1 - num2; break;
//         case "*": return num1 * num2; break;
//         case "/": if (num2 === 0) {
//             return "Cannot divide by zero.";
//         } else { return num1 / num2 }; break
//         default: return "Unsupported operator. Please enter a valid operator (+, -, *, /)."
//     }
// }

// // Test cases
// console.log(simpleCalculator(5, 2, '+')); // 7
// console.log(simpleCalculator(5, 2, '-')); // 3
// console.log(simpleCalculator(5, 2, '*')); // 10
// console.log(simpleCalculator(5, 2, '/')); // 2.5
// console.log(simpleCalculator(5, 0, '/')); // "Cannot divide by zero."
// console.log(simpleCalculator('5', 2, '+')); // "Invalid input. Please enter numeric values."
// console.log(simpleCalculator(5, 2, '&')); // "Unsupported operator. Please enter a valid operator (+, -, *, /)."


// Null Coalescing
// const person = {
//     age: 'Jeelani'
// }

// console.log(person.name ?? 'Unknow');


// console.log(globalThis === window);

// const promises = [Promise.resolve('a'), Promise.reject('b'), Promise.resolve('c')]
// Promise.allSettled(promises).then((result) => console.log(result))


// var containsNearbyDuplicate = function (nums, k) {
//     // Your code goes here
//     const valueData = nums.filter((value, index, arr) => {
//         return value.indexOf(index) !== k
//     })
//     return valueData

// };
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));



// function factorial(n) {
//     if (n === 0) return 1
//     let num = 1;

//     for (let i = 1; i <= n; i++) {
//         num = num * n
//         n--
//     }
//     return num
// }


// console.log(factorial(-3));



// function factorial(n) {
//     if (n === 0) return 1;
//     if (n < 0) return "negitive value are not allowed"
//     return n * factorial(n - 1);
// }
// console.log(factorial(-3));


// function findLargest(arr) {
//     let num = arr[0] //2
//     for (let i = 0; i < arr.length; i++) {
//         if (num < arr[i]) {
//             num = arr[i]
//         }
//     }
//     return num

// }

// console.log(findLargest([2, 1, 5, 3, 7, 6, 9, -10]));


// function removeDuplicate(arr) {
//     return [...new Set(arr)]
// }

// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));


// function primeOrNot(num) {
//     if (num <= 0) return false
//     for (let i = 2; i < num; i++) {
//         if (num % 1 === 0) return false
//     }
//     return true
// }

// console.log(primeOrNot(3));


// function sumArray(arr) {
//     let add = 0;
//     for (let i = 0; i < arr.length; i++) {
//         add += arr[i]
//     }
//     return add
// }

// console.log(sumArray([1, 2, 2, 3, 4, 4, 5]));


// function findIndex(arr, num) {
//     return arr.indexOf(num)

// }
// console.log(findIndex([1, 2, 3, 4, 5], 4));


// function anagram(str1, str2) {
//     const sortedStr = str => str.split('').sort().join('')
//     console.log(sortedStr(str1), sortedStr(str2));

//     return sortedStr(str1) === sortedStr(str2)
// }

// console.log(anagram("listen", "silent"));


// function capitalizeWords(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
// }

// console.log(capitalizeWords("hello world"));


// function countVowels(str) {
//     const vowels = "aeiou"
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.includes(vowels[i])) count++
//     }
//     return count
// }


// console.log(countVowels("Hello"));


// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32
// }

// console.log(celsiusToFahrenheit(25));


// function secondLargest(arr) {
//     let largest = Math.max(); let secondLargest = Math.max()

//     for (let num of arr) {
//         if (num > largest) {
//             secondLargest = largest;
//             largest = num

//         } else if (num > secondLargest && num != secondLargest) {
//             secondLargest = num
//         }
//     }
//     // return secondLargest
// }

// console.log(secondLargest([3, 5, 7, 2, 8]));

// function countCharacter(words, char) {
//     let count = 0
//     for (let word of words) {
//         if (word.includes(char)) {
//             count++
//         }
//     }

//     return count;
// }

// console.log(countCharacter("hello world", "l"));


// function arraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false
//     }
//     return true

// }
// console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(arraysEqual([1, 2, 3], [1, 2, 4]));


// function flattenArray(arr) {
//     let flatArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flatArray = flatArray.concat(flattenArray(arr[i]));
//         } else {
//             flatArray.push(arr[i]);
//         }
//     }
//     return flatArray;
// }

// console.log(flattenArray([1, [2, [3, [4]], 5]]));

// function sumOfDigits(num) {
//     let splitNum = num.toString().split('').reduce((sum, digit) => { return sum + Number(digit) }, 0)
//     return splitNum
// }
// console.log(sumOfDigits(1234));

// function removeVowels(words) {
//     let removedVowel = []
//     const vowels = 'aeiouAEIOU'
//     for (let c of words) {
//         if (vowels.includes(c)) {

//         } else {
//             removedVowel.push(c)
//         }
//     }
//     return removedVowel.join('')
// }
// console.log(removeVowels("hello world"));


// function randomNumberBetween(num1, num2) {
//     return Math.floor(Math.random() * (num2 - num1 + 1)) + num1
// }

// console.log(randomNumberBetween(1, 10));

// function isPerfectSquare(num) {
//     return Math.sqrt(num) % 1 === 0
// }


// function isPerfectSquare(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i * i === num) return true
//     }
//     return false
// }

// console.log(isPerfectSquare(16));
// console.log(isPerfectSquare(20));

// function arrayIntersection(arr1, arr2) {
//     let arrayIntersection = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 arrayIntersection.push(arr2[j])
//             }
//         }
//     }
//     return arrayIntersection
// }

// console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 8, 9]));

// function mergeAndSort(arr1, arr2) {
//     const mergeArray = arr1.concat(arr2).sort((a, b) => a - b)
//     return mergeArray

// }

// function mergeAndSort(arr1, arr2) {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
// }
// console.log(mergeAndSort([3, 1, 4], [2, 5]));

// function balancedParentheses(str) {
//     let stack = []
//     let open = ["(", '{', '['];
//     let close = [")", "}", "]"]
//     let map = { "(": ")", "{": "}", "[": "]" }

//     for (let c of str) {
//         if (open.includes(c)) {
//             stack.push(c)
//         } else if (close.includes(c)) {
//             if (stack.length === 0 || map[stack.pop()] !== c) {
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// }

// console.log(balancedParentheses("{[()]}"));
// console.log(balancedParentheses("{[(])}"));


// function generatePascalTriangle(numRows) {
//     let triangle = [];
//     for (let i = 0; i < numRows; i++) {
//         let row = new Array(i + 1).fill(1);
//         for (let j = 1; j < row.length - 1; j++) {
//             row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//         }

//         triangle.push(row);
//     }
//     return triangle;
// }
// console.log(generatePascalTriangle(5));


// function reverseWord(sentences) {
//     let wordRevers = []
//     const splitSen = sentences.split(' ')
//     return splitSen.reverse().join(' ')
// }

// console.log(reverseWord("hello World"));


// function palindromeDetect(str) {
//     const palin = str.split('').reverse().join('')
//     if (str === palin) return true
//     else return false
// }
// console.log(palindromeDetect("racecar1"));


// function rotationNum(arr, num) {
//     num = num % arr.length
//     return arr.slice(-num).concat(arr.slice(0, -num))
// }

// console.log(rotationNum([1, 2, 3, 4, 5], 3));


// function findNestedValue(obj, propertyPath) {
//     const pathArray = propertyPath.split(".");
//     let result = obj;


//     for (let property of pathArray) {
//         if (result && typeof result === "object" && property in result) {

//             result = result[property];
//         } else {
//             return null;
//         }
//     }

//     return result;
// }

// const obj = {
//     person: {
//         name: "John",
//         age: 30,
//         address: {
//             city: "New York",
//             country: "USA"
//         }
//     }
// };

// const path = "person.name";
// console.log(findNestedValue(obj, path)); // Output: "John"


// function excelColumnNumber(columnTitle) {
//     let result = 0;
//     for (let i = 0; i < columnTitle.length; i++) {
//         let charValue = columnTitle.charCodeAt(i) - 64;
//         result = result * 26 + charValue;
//     }
//     return result;
// }

// console.log(excelColumnNumber("AA"));


// function findSecondSmallest(numbers) {
//     // Your code goes here
//     numbers.sort((a, b) => a - b)
//     const smallest = numbers[0]
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > smallest) {
//             return numbers[i]
//         }
//     }
//     return "No second smallest number";
// }
// var string2Num = parseInt("123xyz");
// console.log(string2Num);


// let count = 0
// let n = 10
// function countOne() {
//     count++
//     console.log(n++);
//     if (count >= 3) {
//         clearInterval(intervalId)
//     }
// }

// const intervalId = setInterval(countOne, 500)


//  init = 5, calls = ["increment","reset","decrement"]
// function createCounter(init) {
//     let presentCount = init
//     const increment = () => {
//         return ++presentCount
//     }
//     const reset = () => {
//         return presentCount = init
//     }
//     const decrement = () => {
//         return --presentCount
//     }
//     return {
//         increment, decrement, reset
//     }
// }

// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());


// function bookArray(arr, size) {
//     let resArr = []
//     let tempArr = []
//     for (let i = 0; i < arr.length; i++) {
//         tempArr.push(arr[i])
//         if (tempArr.length === size) {
//             resArr.push(tempArr)
//             tempArr = [];
//         }
//     }
//     if (tempArr.length) {
//         resArr.push(tempArr)
//     }

//     return resArr;
// }

// console.log(bookArray([1, 2, 3, 4, 5], 2));



// async function hello() {
//     try {
//         abc;
//         return ("Hello")
//     } catch (error) {
//         return ("Boo! You have a " + error)
//     }
// }
// hello().then(value => console.log(value)).catch(error => console.log(error));


// var findDuplicate = function (nums) {
//     const dup = nums.filter((value, index, arr) => {
//         return arr.indexOf(value) !== index
//     })
//     return dup
// };

// console.log(findDuplicate([1, 2, 3, 3, 4]));


// const person = {
//     name: "john",
//     greet: function () {
//         return this.name
//     }
// }

// const greeting = function (getMessage) {
//     console.log(getMessage + " " + this.greet());
// }

// const greetMessage = greeting.bind(person, "Hello");

// greetMessage()


// class Rectrangle {
//     constructor(width, length) {
//         this.width = width
//         this.length = length
//     }
//     getArea(){
//         return this.width * this.length
//     }
//     getPerimeter(){
//         return (this.length + this.width) * 2
//     }
// }

// const result = new Rectrangle(5, 10);

// console.log(result.getArea(), result.getPerimeter());

// var piValue = Math.PI;

// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }

//     getArea() {
//         return piValue * this.radius * this.radius
//     }
//     getCircumference() {
//         return 2 * piValue * this.radius
//     }
// }

// const result = new Circle(5);

// console.log(result.getArea(), result.getCircumference());




