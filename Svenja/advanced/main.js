// TIME CONVERT

// function timeConverter() {
//     let input = prompt("Please write a number of minutes.");
//     let hours = Math.floor(input / 60);
//     let minutes = input % 60;
//     let message = `${input} minutes = ${hours} hours and ${minutes} minute(s).`;
//     return message;
// }

// console.log(timeConverter());


function timeConverter() {
    let input = prompt("Please write a number of minutes.");
    let hours = Math.floor(input / 60);
    let minutes = input % 60;
    return `${input} minutes = ${hours} hours and ${minutes} minute(s).`;
}

console.log(timeConverter());