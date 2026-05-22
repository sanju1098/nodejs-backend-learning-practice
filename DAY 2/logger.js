const fs = require("fs");

function logMessage(message) {
  const log = `${new Date().toISOString()} - ${message}\n`;

  fs.appendFile("app.log", log, (err) => {
    if (err) {
      console.log("Logging failed");
      return;
    }

    console.log("Log saved");
  });
}

module.exports = logMessage;
