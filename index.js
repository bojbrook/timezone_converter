const time = require("./src");

const parisTime = time.getCurrentTime("Europe/Paris", true);
const paristOffset = time.getUTCOffset("Europe/Paris", true);

const NewYorkTime = time.getCurrentTime("America/New_York", true);
const NewYorkOffset = time.getUTCOffset("America/New_York", true);

console.log(parisTime, paristOffset);
console.log(NewYorkTime, NewYorkOffset);

const timeParisFormat = time.formatTimeString(parisTime, false);
const timeNewYorkFormat = time.formatTimeString(NewYorkTime, false);

console.log(timeParisFormat);
console.log(timeNewYorkFormat);

//

module.exports = time;
