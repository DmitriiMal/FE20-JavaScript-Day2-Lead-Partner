// /////////////// //
// //// Basic //// //
// /////////////// //

// ex 1 | Temperature v1.0


// let degrees = Math.floor(Math.random() * 30) - 5;

// console.log(degrees);

// if (degrees <= 10) {
//   console.log("The weather is cold");
//   document.write("The weather is cold");
// } else {
//   console.log("The weather is moderate");
//   document.write("The weather is moderate");
// }


// ???????????????????????????????
// switch (degrees) {
//   case degrees <= 10:
//     document.write("The weather is cold");
//     break;
//   default:
//     document.write("The weather is moderate");
// }


// ex 2 | Random Food

// const favoriteFoods = ['pizza', 'hamburger', 'ice cream', 'chocolate']

// function randomFood() {
//   let randNum = Math.floor(Math.random() * 4);
//   let result = favoriteFoods[randNum];
//   return result
// }

// console.log(randomFood());


// ex 3 | Crystal Gazer

// function crystalGazer(children, partnersName, location, title) {
//   console.log(`You will be a ${title} in ${location} and married to ${partnersName} with ${children} children(s).`);
// }

// crystalGazer(1, 'Magda', 'Vienna', 'Web Developer');


// ex 4 | Age Calculator

function ageCalculator(birtYear, currYear) {
  let result1 = currYear - birtYear;
  let result2 = (currYear - birtYear) - 1;
  return `You are either ${result1} or ${result2}`
}

console.log(ageCalculator(1989, 2023));








// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }