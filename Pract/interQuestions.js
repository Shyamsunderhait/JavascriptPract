//explain what is callback function
function modifyArray(arr,callback) {
    arr.push(100);
    callback();
}

var arr = [1,23,4,5,6,7,8,9];

modifyArray(arr,function() {
    console.log("array has been modified ", arr);
})


//give a string reverse each word in the sentence

// var string = "welcome to this javascript guide";

// var reverseEntireSenctence = revBysep(string, "");

// var reverseEachWord = revBysep(reverseEntireSenctence, " ")

// function revBysep(string, separator) {
//     return string.split(separator).reverse().join(separator);
// }

// console.log(reverseEachWord);

var string = "hi iam shyamsunder hait"
var revEntSen = revBysep(string, '');
var revEchWord = revBysep(revEntSen, " ");

function revBysep(string , seperator){
    return string.split(seperator).reverse().join(seperator)
}

console.log(revEchWord);




//how to check if an object is an array

var arrayList = [1,2,3];

function greet(params) {
    if(Object.prototype.toString.call(params)==='[object Array]'){
        console.log("Array");

    }else{
        console.log("Not an Array");
    }
}
greet(arrayList)

console.log(Array.isArray(arrayList));

// empty an array 

let ar = [1,2,3,4];

ar.length = 0;
console.log(ar);

ar.splice(0,arrayList.length)

//------------------ How to check if a number is an integer------------

function isInt(num) {
    return num% 1 === 0;
}

console.log(isInt(1));
console.log(isInt(1.3));
console.log(isInt(0.5));

// ----------- dublicate an array -----------

arr = [1,2,3,5,4,6];

function dubArr(array) {
    return array.concat(array)
}

console.log(dubArr(arr));


// ------ multiply three inputs -----------

function mul(x) {
    return function (y){
        return function(z){
            return x * y * z;
        }
    }
}

console.log(mul(4)(5)(8));


// base number and add it

function createBase(baseNum) {
    return function(n) {
        return baseNum + n;
    }
}

var addSix = createBase(12);
console.log(addSix(22));

// ---------------- Anagram ------------
 var fi = 'Mary';
 var se = 'Army';

 function isAna(first ,second) {

    var a = first.toLowerCase();
    var b = second.toLowerCase();

    a = a.split("").sort().join();
    b = b.split("").sort().join();

    return a === b;
 }

console.log( isAna(fi,se));

function simplfunc(){
    var x = 10;
    x++
    return x
}

function closFunc(){
    var x = 10;
    function inc() {
      return  x++ 
    }
    return{
        inc
    }
}

console.log(simplfunc());
console.log(simplfunc());
console.log(simplfunc());

console.log(closFunc());

var ref = closFunc();
console.log(ref.inc());
console.log(ref.inc());
console.log(ref.inc());
console.log(ref.inc());
