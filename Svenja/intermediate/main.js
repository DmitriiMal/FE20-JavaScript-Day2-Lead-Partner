// CAPITALIZE
let message = "i am a web developer";

const capitalize = (function () {
    let firstLetter = message.charAt(0).toUpperCase();
    return firstLetter + message.substring(1);
}())

console.log(capitalize);


// AVERAGE GRADE
function average(math, physics, english) {
    sum = math + physics + english;
    average = sum / 3;
    result = `<strong>Sum: ${sum}<br><br>Average: ${average}</strong>`
    document.write(result);
}

average(1, 2, 3);