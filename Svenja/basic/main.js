/*
// EXERCISE 1 - TEMPERATURE
let temperature = Math.floor((Math.random() * 31) - 5);
console.log(temperature);

if (temperature <= 10) {
    console.log("The weather is cold");
} else {
    console.log("The weather is moderate");
}


// EXERCISE 2 - RANDOM FOOD
const favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood() {
    let x = favoriteFoods[Math.floor(Math.random() * 4)];
    console.log(x);
}

randomFood();


// EXERCISE 3 - CRYSTAL GAZER
function crystalGazer(children, partner, location, job) {
    document.write(`You will be ${job} in ${location} and married to ${partner} with ${children}.`);
}

crystalGazer("3 children", "Sebastian", "Vienna", "an architect");


// EXERCISES 4 - AGE CALCULATOR
function ageCalculator(birthYear, currentYear) {
    age = currentYear - birthYear;
    console.log(`You are either ${age - 1} or ${age}.`);
}

ageCalculator(1991, 2023);
*/


// EXERCISES 5 - AGE CALCULATOR IMPROVED
function ageCalculator(birthYear) {
    x = function getFullYear(Date);
    // age = getFullYear() - birthYear;
    // console.log(`You are either ${age - 1} or ${age}.`);
}

// ageCalculator(1991);