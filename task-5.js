"use·strict";

const checkForSpam = function(message) {
  let newMessage = message.toLowerCase();
  newMessage = newMessage.includes("spam") || newMessage.includes("sale");
  return newMessage;
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
