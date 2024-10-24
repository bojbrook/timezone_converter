const time = require("./src");

console.log(time.getTimeZones());

const berlinTime = time.getCurrentTimeFromTimezone("Europe/Berlin", false);
console.log(berlinTime); // Output: 2023-10-01T07:00:00-05:00

module.exports = time;
