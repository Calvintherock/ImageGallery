//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// Define variables
let n = 10;
const h = 100; //variable will not be changed with operations
let is_active = true;
//do not use var

if(is_active){

}

if(!is_active){

}

if (n % 2 == 0) {
    console.log(n, " is an even number.");
} else {
    console.log(n, "is an odd number.");
}

const quote = "To be or not to be!";
let i = 0;
while (i < quote.length){
    console.log(quote[i])
    i++
}

for(let i = 0; i < quote.length; i++) {
    
}

i = 0;
do {
console.log(quote[i])
i++
} while(i < quote.length) {

}

console.log(quote, "has", quote.length, "characters");

console.log(quote.charAt(0))
console.log(quote[0]) //works the same

console.log(n);
// Will show 10 in the inspect html console log

alert("Hi");

let day = 1;

if (day == 1 || day == 7) {
    console.log("weekend")
} else if(day > 1 && day < 7){
    console.log('a week day')
} else {
    console.log("invalid day")
}
// Pop up window saying Hi

switch(day){
    case 1:
    case 7:
        console.log("weekend");
    break;

    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("weekday");
    break;

    default:
        console.log("invalid day");

}

console.log(n);

let x = parseInt(document.querySelector("input").value);
let y = 4 * x + 12;

document.querySelector(".result").innerHTML = y;
document.querySelector("#get-result").onclick


getMax(x, y, z)// This function takes three numbers, x, y, and z, as input and returns the largest among them.
getMin(x, y, z)// The opposite of max(x, y, z). It returns the smallest among x, y, and z.
getMean(x, y, z)// Returns the average (or mean) of the given x, y, and z numbers.
compare(word1, word2)// Given two strings, word1 and word2, this function returns: 0 if word1 is the same as word2; 1 if word1 is greater than word2; and -1 if word1 is smaller than word2.
getCharPerLine("hello world", false)// Given a string str and a boolean parameter indent, this function should return a multi-line string with each character of the string written on its own line. If the character is a space, then ignore it. If indent is true, each line should be preceded by diagonal indentation.. For example, the statement:
getCharPerLine("hello world", true)

console.log(arrow(3))

console.log(arrow(7))


