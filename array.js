console.log('Here is : ', 'array')


/*
1
Correct the syntax error
[ 1,7  9  45, ]

var num=[1,7,9,45]الحل الصح

["Str" "alex","moh"

var sttring=["str" ,"alex","moh"]الحل الصح


'the','fox' 'over' lazy, 'dog',  ]
['the', 'fox', 'over', 'lazy', 'dog']الحل الصح
*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
let fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

var FavoriteFood=["pizza","rice&chicken","pasta","salat","Burgers"];
console.log(FavoriteFood);

let FavoriteSport=["Swimming","running","Tennis"];
console.log(FavoriteSport);
// console.log(FavoriteSport.indexOf("running"));



var FavoriteMovie=["Frozen","Homealone", "Interstellar","Alqaddar"];
console.log(FavoriteMovie);
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
        function firstOfArray(array) {
            return array[0];
        }
        console.log(firstOfArray([1,4,5]));
        console.log(firstOfArray(["t","u","g","x"]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
        function  lastOfArray(arr) {
            s=arr[arr.length - 1];
            return s;
        }
        console.log(lastOfArray([1,4,5]) );
        console.log(lastOfArray(["t","u","g","x"]));
/*
6
Using console make this array to be like this one (push اضافة عنصر من الاخير, unshift اضافة عنصر من البداية من اليمين, shiftازالة عنصر من البداية, pop ازالة اخر عنصر )

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.unshift(1);
array.push(10);
array.shift();
array.pop();
console.log(array);
//var array = [0,5,7,9];

// Add 1 to the start
// array.unshift(1);

// // Add 10 to the end
// array.push(10);

// // Remove the first element
// array.shift();

// // Remove the last element
// array.pop();

// // Add 3, 4, 6, 8 in order to the array
// array.push(3, 4, 6, 8);

// console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5];

// push: Adds an element to the end of the array
console.log(array2.push(10));  // Output: 5 (new length of the array)
console.log(array2);  // Output: [5, 9, -7, 3.5, 10]

// unshift: Adds an element to the beginning of the array
console.log(array2.unshift(20));  // Output: 6 (new length of the array)
console.log(array2);  // Output: [20, 5, 9, -7, 3.5, 10]

// shift: Removes the first element from the array
console.log(array2.shift());  // Output: 20 (removed element)
console.log(array2);  // Output: [5, 9, -7, 3.5, 10]

// pop: Removes the last element from the array
console.log(array2.pop());  // Output: 10 (removed element)
console.log(array2);  // Output: [5, 9, -7, 3.5]

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
// يعطيك المؤشر الذي يقع في المنتصف.length / 2
// هذا يستخدم لتقريب النتيجة إلى أقرب عدد صحيح أصغر أو يساوي، مما يعطينا المؤشر الفعلي للعناصر الوسطية.Math.floor(length / 2)
function middleOfArray(array) {
let length=array.length;

if (length %2 ===1) {

    return array[Math.floor(length / 2)];
}
else {
    // Even length array: return the two middle elements
    let midIndex = length / 2;
    return array[midIndex - 1] + " and " + array[midIndex];
}
}
console.log(middleOfArray([1,4,5]));
console.log(middleOfArray(["t","u","g","x"]));

/*تزبيط الحل
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something

var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals[0]='zebra';
animals[1]='elephant';
animals.pop();
console.log(animals);

var nums= [1,2,3,8,9];
nums[0] = 5;      
nums[1] = -22;     
nums[2] = 3.5;    
nums[3] = 44;      
nums[4] = 98;       
nums[5] = 44;      

console.log(nums); 

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(array,index) {
    return array[index];
}
var nums= [1,2,3,8,9];
console.log(indexOfArray(nums,3));
console.log(indexOfArray(nums,1));
console.log(indexOfArray(nums,4));


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
هي دالة تقوم بأخذ جزء من المصفوفة بدءًا من الفهرس 0 وحتى الفهرس arr.length - 1 (أي أنها تستبعد العنصر الأخير).
return array.slice(array.length-1);يعني برجع بس العنصر الاخير بقطع المصفوفة كاملة وبخلي اخر عنصر
*/
    function arrayExceptLast(array)
    {

        return array.slice(0,array.length-1);

    }
    //او باستخدامpop

    var nums= [1,2,3,8,9]
    console.log(arrayExceptLast(nums));
    var raa=["Ali","Alma"];
    console.log(arrayExceptLast(raa));
/*
12
Create a function called addToEnd             باستخدام     push< iteam addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(array,value) {
    array.push(value);
    return array;
}
var nums= [1,2,3,8,9];
console.log(addToEnd(nums,55));
var variable=["Alam","Alyan"];
console.log(addToEnd(variable, "Haya"))




// all the exercises below should solved 2 times: 
// 
// 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(Array) {
    let sum=0;
    let i=0;
    while(i<Array.length){
        sum+=Array[i];
        i++;

    }
    return sum;

} 
var nums= [1,2,3,8,9];
console.log(sumArray(nums));

function sumArray(Array) {
    let sum=0;
    for (let i = 0; i < Array.length; i++) {
    sum+=Array[i];
        
    }
    return sum;
}
var nums= [1,2,3,8,9];
console.log(sumArray(nums));
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray(Array) {
    let min=Array[0];
    for(let i = 1; i < Array.length; i++){
        if(Array[i]<min)
            {
            min=Array[i];
        }
    }
    return min;
}
var nums= [1,2,3,8,9];
console.log(minInArray(nums));


function  minInArray(Array) {
    let min=Array[0];
    leti=0;
    while (i <Array.l) {  
        if (Array[i] < min) {  
        min = Array[i];  
        }
        i++;  
    }
    return min;  
    }
    var nums= [1,2,3,8,9];
    console.log(minInArray(nums));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {  
        arr.splice(i, 1); 
        // splice تعمل حذف
        break;   
    }
    }
    return arr;  
} var nums= [1,2,3,8,9];
console.log(minInArray(nums,8));

function removeFromArray(arr, elem) {
    let i = 0;
    while (i < arr.length) {
    if (arr[i] === elem) {  
        arr.splice(i, 1);  
        break;  
    }
    i++;  
    }
    return arr;  
}var nums= [1,2,3,8,9];
console.log(minInArray(nums,8));


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(array) {
    let oddArr = []; 
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {  
        oddArr.push(arr[i]);  
    }
    }
    return oddArr; 
} var nums= [1,2,3,8,9];
console.log(oddArray(nums));




function oddArray(array) {
    let oddArr=[];
    let i=0;
    while( i<arr.length){
        if (arr[i] % 2 !== 0) {  // إذا كان العنصر فردي
            oddArr.push(arr[i]);  // إضافة العنصر الفردي إلى المصفوفة الجديدة
        }
        i++; 
        }
        return oddArray;
    }var nums = [1, 2, 3, 8, 9];
    console.log(oddArray(nums));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];  
    }
    return sum / arr.length;  
}
var nums = [1, 2, 3, 8, 9];
  console.log(aveArrayForLoop(nums));  // النتيجة: 4.6
var nums2 = [1, 2, 3, 8, 9, 77];
  console.log(aveArrayForLoop(nums2));  // النتيجة: 16.6

function aveArray(arr) {
    let sum = 0;  
    let i = 0;  
    while (i < arr.length) {
    sum += arr[i]; 
    i++;  
    }
    return sum / arr.length;  
}

  // اختبار الكود:
var nums = [1, 2, 3, 8, 9];
  console.log(aveArrayWhileLoop(nums));  // النتيجة: 4.6

var nums2 = [1, 2, 3, 8, 9, 77];
console.log(aveArrayWhileLoop(nums2)); 

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr) {
    let shortest = arr[0];  
    let i = 1;  
    while (i < arr.length) { 
    if (arr[i].length < shortest.length) {  
        shortest = arr[i];  
    }
    i++;  
    }
    return shortest;  
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArray(strings));  
function shorterInArray(arr) {
    let shortest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {  
    if (arr[i].length < shortest.length) { 
        shortest = arr[i]; 
    }
    }
    return shortest;  
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArrayF(strings)); 
/*
19
Create a function called repeatCharعدد مرات التكرار للحرف
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatCha(word, char) {
    let count = 0;  
    for (let i = 0; i < word.length; i++) {  
      if (word[i] === char) {  
        count++;  
    }
    }
    return count; 
}

  // اختبار الكود:
    var string = "alex mercer madrasa rashed2 emad hala";
  console.log(repeatCharForLoop(string, "a"));  // النتيجة: 6
  console.log(repeatCharForLoop(string, "z"));  // النتيجة: 0



function repeatChar(str, char) {
    let count = 0;  // لتخزين عدد مرات التكرار
    let i = 0;  // الفهرس بداية من 0
    while (i < str.length) {  // استمر في التكرار حتى نصل إلى نهاية السلسلة النصية
      if (str[i] === char) {  // إذا كان الحرف الحالي يطابق الحرف المطلوب
        count++;  // نزيد عدد مرات التكرار
    }
      i++;  // الانتقال إلى الحرف التالي
    }
    return count;  // إرجاع عدد المرات التي تكرر فيها الحرف
}

  // اختبار الكود:
    var string = "alex mercer madrasa rashed2 emad hala";
  console.log(repeatCharWhileLoop(string, "a"));  // النتيجة: 6
  console.log(repeatCharWhileLoop(string, "z"));  // النتيجة: 0


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(arr) {
    let result = [];  
    for (let i = 0; i < arr.length; i++) {  
      if (i % 2 === 0 && arr[i].length % 2 !== 0) {  
        result.push(arr[i]);  
    }
    }
    return result;  
}

  // اختبار الكود:
    var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  console.log(evenIndexOddLength(strings));  // النتيجة: ["madrasa"]




function evenIndexOddLength(arr) {
    let result = [];  
    let i = 0;  // الفهرس بداية من 0
    while (i < arr.length) {  // التكرار عبر المصفوفة
      if (i % 2 === 0 && arr[i].length % 2 !== 0) {  // تحقق من الشرطين
        result.push(arr[i]);  // إضافة السلسلة النصية إلى النتيجة
    }
      i++;  // الانتقال إلى العنصر التالي
    }
    return result;  // إرجاع النتيجة
}

  // اختبار الكود:
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  console.log(evenIndexOddLength(strings));  // النتيجة: ["madrasa"]






function evenIndexOddLength(arr) {
    let result = [];  // مصفوفة لتخزين النتيجة
    for (let i = 0; i < arr.length; i++) {  // التكرار عبر المصفوفة
      if (i % 2 === 0 && arr[i].length % 2 !== 0) {  // تحقق من الشرطين
        result.push(arr[i]);  // إضافة السلسلة النصية إلى النتيجة
    }
    }
    return result;  // إرجاع النتيجة
}

  // اختبار الكود:
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  console.log(evenIndexOddLength(strings));  // النتيجة: ["madrasa"]
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(arr) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) { 
      result.push(Math.pow(arr[i], i));  
    }
    return result;  
}

  // اختبار الكود:
var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));

function powerElementIndex(arr) {
    let result = [];  // مصفوفة لتخزين النتيجة
    let i = 0;  // الفهرس بداية من 0
    while (i < arr.length) {  // التكرار عبر المصفوفة
      result.push(Math.pow(arr[i], i));  // رفع العنصر إلى أس الفهرس
      i++;  // الانتقال إلى العنصر التالي
    }
    return result;  // إرجاع النتيجة
}

  // اختبار الكود:
var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums)); 
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(arr) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {  
      if (i % 2 === 0 && arr[i] % 2 === 0) 
        //الشرط even number +even result 
        {  
        result.push(arr[i]);
    }
    }
    return result;  
}

var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
  console.log(evenNumberEvenIndex(nums));  //
function evenNumberEvenIndex(arr) {
    let result = [];  
    let i = 0;  
    while (i < arr.length) { 
      if (i % 2 === 0 && arr[i] % 2 === 0) {  
        result.push(arr[i]);  
    }
      i++;  
    }
    return result;  
}
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
  console.log(evenNumberEvenIndex(nums));  // النتيجة: [2, 8, 34]




  //different bettwen slice and splaiy




