const time = require("./src");

const parisTime = time.getCurrentTime("Europe/Paris", true);
const paristOffset = time.getUTCOffset("Europe/Paris", true);

const NewYorkTime = time.getCurrentTime("America/New_York", true);
const NewYorkOffset = time.getUTCOffset("America/New_York", true);

console.log(parisTime, paristOffset);
console.log(NewYorkTime, NewYorkOffset);
module.exports = time;
