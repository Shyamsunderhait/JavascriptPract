//write a function to find maximum number in javascript
 const num = [5,5,6,8,4,7,3]

 function findMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]> max){
            max = arr[i]
        }
        
    }
    return max;
 }
 console.log(findMax(num));

 //Palindrome

 function isPalindrome(str){
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
        
    }
    if(rev == str){
        return true
    }
    else{
        return false
    }
 }
 let str1 = 'madam'
 let str2 = 'ggaa'
 console.log(isPalindrome(str1));
 console.log(isPalindrome(str2));

//JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function filterEvenNumbers(number){
   return number.filter((num)=>{
   return num%2===0
    })
}
 
let arr = [1,5,4,6,9,8,7,6,3,2]
console.log(filterEvenNumbers(arr));

// Reverse a String

function reverseString(str){
    let revStr = '';
    for (let i = str.length - 1; i >=0; i--) {
        revStr += str[i]
    }
    console.log(revStr);
}

let tu = "shyamsunderhait"
reverseString(tu)


// Factorial

let g = 5;

function factorial1(n) {
    let ans = 1;

    if(n === 0){
        return 1;
    }else{
        for (let i = 2; i <= n; i++) {
            ans = ans * i;
         }
        return ans;
    }
}
console.log(factorial1(g));


//recursive approach for factorial
let n = 5
function factorial(n) {
    if(n === o){
        return 1;
    }
    else{
        return n* factorial(n - 1);
    }
}

// Check Prime Number 

function checkPrime(num) {
    let i , flag = true;
    for (let i = 2; i <=num -1 ; i++) {
        if(num %i == 0){
            flag = false;
            break;
        }
    }
    if(flag == true){
        console.log(num + " is a prime number");
    }else{
        console.log(num + " is not a prime number")
    }
}

checkPrime(4)

// fibonacci 

function fibonacci(num) {
    let num1 = 0
    let num2 = 1
    let sum;
    let i = 0
    for (let i = 0; i < num; i++) {
        sum = num1 + num2
        num1 = num2
        num2 = sum
    }
    return num2
}

console.log(fibonacci(5));

//convert a string to title case (capitalize the first letter of each word). 

const sent = "my name is shyamsunder hait";
const words = sent.split(" ");
//console.log(words);

for (let i = 0; i < words.length; i++) {
   words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    
}
words.join(" ")
console.log(words.join(" "));


// Write a function to find longest word in a string


let findLongestWord = (str)=>{
    if(str.trim().length === 0){
        return false;
    }
    word = str.split(" ")
    //console.log(word);
    // word = word.sort((a,b)=> a.length - b.length)
    // return console.log(word.at(-1));

    //or
    return word.reduce((accum,crntWord)=> crntWord.length > accum.length ? crntWord : accum,"")
}

console.log(findLongestWord("hey watshapp shyam longestwordinsentence"));


//make first word of each sentence to uppercase

let toUpCase = (str)=>{
    if(str.length > 280 || str.length === 0){
        return false;
    }

    str = str.split(" ");
    str = str.map((crntVal)=>  crntVal.replace(crntVal[0],crntVal[0].toUpperCase()))
    str = str.join(" ");
    return str


}

console.log(toUpCase('hey whatsapp what you doing where you gonna be tommorow'));


//count number of character repetition or frequency of a character in a string
//function should handle both lower and uppercase character

//tip always use reduce method for single value


let countChar = (word,char)=>{
    word = word.toLowerCase();
    char = char.toLowerCase();
    totalCount = word.split("").reduce((accum,crnt)=>{
        if(crnt === char){
            accum++; 
        }
        return accum

    },0)
    return totalCount;
}


console.log(countChar("ShyamsunderHait", "s" ));



//second largest number in an array


let ara = [1,4,5,4,4,8,8,4,4,7,9,9]

let nle = ara.length;

let high = -Infinity;
let secHigh = -Infinity;

for (let i = 0; i < nle; i++) {
    high = Math.max(high,ara[i]);
}

for (let i = 0; i < nle; i++) {
    if(ara[i]< high){
        secHigh = Math.max(secHigh,ara[i])
    }
    
}
console.log(high,secHigh);


// join two arrays without concate or forllog (APPLY)

let yaa = ['f','y','r','w'];
let too = [1,4,3,5];

yaa.push.apply(yaa,too)
console.log(yaa);