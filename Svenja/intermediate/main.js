// CAPITALIZE
let message = "i am a web developer";

const capitalize = (function () {
    let firstLetter = message.charAt(0).toUpperCase();
    return firstLetter + message.substring(1);
}())

console.log(capitalize);