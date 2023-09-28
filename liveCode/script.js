// user can input a name which becomes then the value for the variable fname
let fname = prompt("Please write your first name");

// "or" is written ||
// "and" is written &&
// defining three different values to fullfill the if conditions
if (fname == "Serri" || fname == "Riola" || fname == "MJ") {
    console.log("Hello Admin");
} else {
    console.log("Hello User");
}

// shortcut for if conditions
let message = (fname == "Serri") ? "Hello Admin" : "Hello User";
console.log(message);

// a function must be reusable/dynamic --> don't print to console but return a result,
// this result can be then printed outside of the function

function calAvg(cr1, cr2, cr3, cr4, cr5, cr6) {
    let sum = cr1 + cr2 + cr3 + cr4 + cr5 + cr6;
    let avg = sum / 6;
    return avg;
}

// this code can now be used for as many different cases as I want:
let student1 = calAvg(80, 90, 100, 90, 70, 100);
let student2 = calAvg(80, 90, 100, 90, 70, 100);

let text = "Hello world".length;
// (property) means no need for parenthes, but (method) does need parenthes

function calAge() {
    let birthYear = Number(prompt("Please type your birth year!"));
    // inputs will always be a string; need to convert it into a number!!
    if (isNaN(birthYear)) {
        return "Sorry, you must pass a number!";
    }
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

console.log(calAge());
document.write(calAge());

let a = 12;
{
    let a = 20
}
console.log(a);
// result is gonna be 12 because 20 is re-assigned inside the block and this change is not visible from the outside --> let & const are block-elements (var is the exception!)
// inside a function even a var is not visible from outside
// playing dirty is to leave out the variable description:
/* let a = 12;
    {
        let a = 20
    }
    console.log(a); */
