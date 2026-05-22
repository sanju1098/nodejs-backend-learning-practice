const fs = require("fs");
/*
==========================================
TASK 1 — File Reader
Requirements:
- Read sample.txt
- Print content
- Handle errors properly
==========================================
*/

fs.readFile("task.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Error reading file:", error.message);
    return;
  }

  console.log("File Content:");
  console.log(data);
});

/*
==========================================
TASK 2 — File Writer
Requirements:
- Create notes.txt
- Write custom text
==========================================
*/

const content = `
This is my notes file.
Learning Node.js File System module.
`;

fs.writeFile("notes.txt", content, (error) => {
  if (error) {
    console.error("Error writing file:", error.message);
    return;
  }

  console.log("File created successfully!");
});

/*
==========================================
TASK 3 — Logger Utility
Requirements:
- Append logs into app.log
- Include timestamp
==========================================
*/

function logMessage(message) {
  // Generate current timestamp
  const timeStamp = new Date().toISOString();

  // Create formatted log message
  const log = `[${timeStamp}] ${message}\n`;

  // Append log into file
  fs.appendFile("app.log", log, (error) => {
    if (error) {
      console.error("Error writing log:", error.message);
      return;
    }

    console.log("Log added successfully");
  });
}

// Example logs
logMessage("Server started");
logMessage("Database connected");

/*
==========================================
TASK 4 — CLI Calculator
Requirements:
- Support:
    add
    subtract
    multiply
- Example:
node app.js add 10 20

Output:
30
==========================================
*/

// Read command-line arguments
const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

// Validate numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log("Please provide valid numbers");
  process.exit();
}

// Perform operation
switch (operation) {
  case "add":
    console.log("Result:", num1 + num2);
    break;

  case "subtract":
    console.log("Result:", num1 - num2);
    break;

  case "multiply":
    console.log("Result:", num1 * num2);
    break;

  default:
    console.log("Invalid operation");
}

/*
Example Commands:

node app.js add 10 20
Result: 30

node app.js subtract 20 5
Result: 15

node app.js multiply 5 4
Result: 20
*/
