// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------


Math.max.apply(null, numbers) // 4


// ---------------------------
// 2. Find longest string
// ---------------------------

function fndLargst (arr){

var largest = 0;

var largestStr = "";

  for (var i = 0; i < arr.length; i++) {
    
    if (arr[i].length > largest) {
    
    largest = arr[i].length;
    
    largestStr = arr[i];
    
    } 
  }

  return largestStr
}

// ---------------------------
// 3. Find even numbers
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];

var evNun = [];

for (var i = 0; i < numbers.length; i++) {
  
  if (numbers[i] % 2 == 0) {

    evNun.push(numbers[i])
  }

}

// OR....

console.log("filtered " + numbers.filter(getEven))

function getEven(num) {

    return (num % 2 == 0);
}



// ---------------------------
// 4. Find odd numbers
// ---------------------------

var evNun = [];

for (var i = 0; i < numbers.length; i++) {
  
  if (numbers[i] % 2 != 0) {

    evNun.push(numbers[i])
  }

}


console.log(evNun) 

// OR....

console.log("filtered " + numbers.filter(getOdd))

function getOdd(num) {

    return (num % 2 != 0);
}


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------


console.log("filtered " + strings.filter(hasIs))


function hasIs(str) {

    return (str.indexOf('is') != -1);
}


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var theyConcat = numbers.concat(strings);

console.log(theyConcat)

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------


var jsTeachers = instructors.filter(tchJS) 


function tchJS(inst) {

  return inst.teaches === 'JavaScript'
}

jsTeachers.sort(function(a, b){
    if(a.firstname < b.firstname) return -1;
    if(a.firstname > b.firstname) return 1;
    return 0;
})


console.log(jsTeachers)
