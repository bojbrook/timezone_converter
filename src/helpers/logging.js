const winston = require("winston");
const { isTrue } = require("./utlil");

const debugENV = process.env.TZ_DEBUG || "false";
const debugMode = isTrue(debugENV);

const logger = winston.createLogger({
  level: debugMode ? "debug" : "error",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
