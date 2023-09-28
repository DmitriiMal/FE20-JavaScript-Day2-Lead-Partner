// //////////// //
// Time Convert //
// //////////// //


function timeConvert(number) {
  let hours = number / 60;
  let minutes = (number % 60) / 1;

  let message = `${number} = ${hours.toFixed()} hour(s) and ${minutes} minute(s).`;
  return message;
};

console.log(timeConvert(200));


