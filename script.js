var age = prompt("What is your age?");
if (age < 0) {
console.log("Error: your age can not be negative.");
}
else if (age === 21) {
    console.log("Happy 21st birthday.");
} 

if (age % 2 !== 0) {
    console.log("Your age is odd.")
}

if (Number.isInteger(Math.sqrt(age))) {
    console.log("Your age is a perfect square.")
}