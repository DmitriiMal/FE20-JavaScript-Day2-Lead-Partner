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


const favoriteFoods = ['pizza', 'hamburger', 'ice cream', 'chocolate']

function randomFood() {
  let randNum = Math.floor(Math.random() * 4);
  let result = favoriteFoods[randNum];
  return result
}

console.log(randomFood());


// ex 3 | Crystal Gazer


















// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }