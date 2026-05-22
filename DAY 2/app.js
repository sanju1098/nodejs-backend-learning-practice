// ==========================================
// Import Required Modules
// ==========================================

const fs = require("fs");
const path = require("path");
const logMessage = require("./logger");

// Load environment variables from .env file
require("dotenv").config();

// ==========================================
// Event Loop / Async Example
// ==========================================

console.log("Start");

// Asynchronous file read
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }

  console.log(data);
});

console.log("End");

/*
Expected Output:

Start
End
THIS IS A TEST FILE

Reason:
readFile() is asynchronous.
Node.js does not wait for file reading to finish.
*/

// ==========================================
// Read File Example
// ==========================================

fs.readFile("readFile.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Read File Error:", err.message);
    return;
  }

  console.log("Read File Content:");
  console.log(data);
});

// ==========================================
// Write File Example
// ==========================================

fs.writeFile("output.txt", "Hello Backend", (err) => {
  if (err) {
    console.log("Write File Error:", err.message);
    return;
  }

  console.log("File written successfully");
});

// ==========================================
// Append File Example
// ==========================================

fs.appendFile("logs.txt", "New Log\n", (err) => {
  if (err) {
    console.log("Append File Error:", err.message);
    return;
  }

  console.log("Log appended successfully");
});

// ==========================================
// Synchronous File Read Example
// ==========================================

// const data = fs.readFileSync("sample.txt", "utf8");
// console.log(data);

/*
readFileSync() blocks execution until file reading completes.
Not preferred for heavy production operations.
*/

// ==========================================
// Callback Function Example
// ==========================================

function callback(err, data) {
  if (err) {
    console.log("Callback Error:", err.message);
    return;
  }

  console.log("Callback Data:");
  console.log(data);
}

fs.readFile("readFile.txt", "utf8", callback);

// ==========================================
// Path Module Example
// ==========================================

// Creates safe cross-platform file paths
const filePath = path.join(__dirname, "files", "test.txt");

console.log("File Path:", filePath);

// ==========================================
// Custom Logger Example
// ==========================================

logMessage("Server Started");

// ==========================================
// Environment Variables Example
// ==========================================

console.log("PORT:", process.env.PORT);
console.log("SECRET_KEY:", process.env.SECRET_KEY);

/*
Example .env file:

PORT=5000
SECRET_KEY=mysecretkey
*/

// ==========================================
// Command Line Arguments Example
// ==========================================

const args = process.argv;

console.log("Command Line Arguments:", args);

/*
Run:

node sample.js hello

Output:

[
  'node-path',
  'sample.js',
  'hello'
]
*/
