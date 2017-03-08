// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

console.log("f1 a " + max(7, 3))

console.log("f1 b " + max(3, 7))

function max(a, b){
    
    if (a > b) {

      return a

    } else {

      return b

    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

console.log("f2 a " + maxOfThree(10, 9, 8))

console.log("f2 b " + maxOfThree(9, 10, 8))

console.log("f2 c " + maxOfThree(9, 8, 10))

function maxOfThree(a, b, c){

    if (a > b &&  a > c) {

      return a

    } else if (b > c &&  b > a) {

      return b

    } else {

      return c
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


console.log("f3 a " + isVowel('a'))

console.log("f3 b " + isVowel('f'))

function isVowel(char) {
    
    var arr = ["A", "E", "I" , "O", "U"]

    char = char.toUpperCase();

      for (i = 0; i < arr.length; i += 1) {

        if (char === arr[i]) {

          return true;

        } else {

          return false;
        }
      }
    }
// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". 
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
console.log(rovarspraket("this is fun"))


function rovarspraket(str) {

  var nArr = [] // create new array

  var nStr = str

  nStr = nStr.split("") // split string

  for (var i = 0; i < nStr.length; i++) {

    var patt = /a|e|i|o|u|\s/i // regEx for vowles - ( \s = " " )

    var result = patt.test(nStr[i]); // use test for boolean

    if (result == false) {
      
      nArr.push(nStr[i] + 'o' + nStr[i]) // if vowel add itself plus 'o' plus self to new array
    
    } else {
    
      nArr.push(nStr[i]) // else just add itself
    
    }

  }

  nArr = nArr.join("") // join new array

  return (nArr) // return
}
  


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

console.log(reverse("abcd"))

function reverse(strng){
    
    var str = strng.split("");

    str.reverse();

    str = str.join("")

    return str;
}






