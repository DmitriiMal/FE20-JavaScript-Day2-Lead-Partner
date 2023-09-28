
let message = "i am a web developer";

const firstUpp = (function () {
  let firstLettoUp = message.charAt(0).toUpperCase();
  return firstLettoUp + message.substring(1);
}());


console.log(firstUpp)










// function firstUpp(message) {
//   let firstLettoUp = message.charAt(0).toUpperCase();
//   console.log(firstLettoUp + message.substring(1));
// };

// firstUpp('tea');