const messages = [
  "The specifications were ambiguous",
  "That wasn't in the original specification",
  "The third party API is not responding",
  "¡Pero si no he tocado esa parte del código en semanas!",
  "You must have done something wrong",
  "That's already fixed it just hasn't taken effect yet",
  "That code was written by the last guy",
  "I have too many other high priority things to do right now",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
