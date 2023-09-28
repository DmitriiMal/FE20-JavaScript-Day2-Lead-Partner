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

// function ageCalculator(birtYear, currYear) {
//   let result1 = currYear - birtYear;
//   let result2 = (currYear - birtYear) - 1;
//   return `You are either ${result1} or ${result2}`
// }

// console.log(ageCalculator(1989, 2023));


// ex 5 | Age Calculator-improved

// const d = new Date();
// const currYear = d.getFullYear();

// function ageCalculator(birtYear) {
//   let result1 = currYear - birtYear;
//   let result2 = (currYear - birtYear) - 1;
//   return `You are either ${result1} or ${result2}`
// }

// console.log(ageCalculator(1989));


// ex 6 | Degree-Radian Conversion

function getGradians(degrees) {

  let radians = degrees * (Math.PI / 180);

  let message = `${degrees} degrees equals to ${radians.toFixed(3)} radians`;
  return message;
}

console.log(getGradians(90));


// ex 7 | Area and Volume of a box





