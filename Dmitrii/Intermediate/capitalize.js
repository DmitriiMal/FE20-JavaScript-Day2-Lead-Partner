
function firstUpp(message) {
  let firstLettoUp = message.charAt(0).toUpperCase();
  console.log(firstLettoUp + message.substring(1));
};

firstUpp('tea');