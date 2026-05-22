# Node.js Notes

## What Exactly is Node.js?

[Node.js](https://nodejs.org/) is:

- A JavaScript runtime
- Built on Chrome’s V8 Engine
- Used to run JavaScript outside the browser

Before Node.js:

- JavaScript only worked inside browsers

After Node.js:

- JavaScript can build servers
- APIs
- Database applications
- CLI tools
- Real-time applications

---

# How Node.js Works Internally

Node.js is:

- Single-threaded
- Event-driven
- Non-blocking
- Asynchronous

Because of this architecture, Node.js can efficiently handle thousands of requests simultaneously.

---

# npm & package.json

## What is npm?

[npm](https://www.npmjs.com/) stands for:

> Node Package Manager

It is used to:

- Install packages
- Manage dependencies
- Run scripts

Example:

```bash
npm install express
```

---

# Modules in Node.js

Node.js uses modules to organize and reuse code.

---

## CommonJS Modules

Default module system used in Node.js.

---

## Export Example

### math.js

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

---

## Import Example

### app.js

```js
const add = require("./math");

console.log(add(2, 3));
```

Output:

```bash
5
```

---

# Built-in Core Modules

Node.js provides several built-in modules.

Important core modules:

| Module   | Purpose                |
| -------- | ---------------------- |
| `fs`     | File system operations |
| `path`   | Path handling          |
| `os`     | System information     |
| `http`   | Create web servers     |
| `events` | Event handling         |

---

# File System Module (fs)

The `fs` module is one of the most important Node.js core modules.

Used for:

- Reading files
- Writing files
- Updating files
- Deleting files

Example:

```js
const fs = require("fs");
```

---

# Path Module

The `path` module helps work with file and directory paths safely.

Example:

```js
const path = require("path");
```

Important methods:

| Method       | Purpose                |
| ------------ | ---------------------- |
| `join()`     | Joins paths            |
| `basename()` | Returns file name      |
| `extname()`  | Returns file extension |
| `dirname()`  | Returns directory name |

Example:

```js
const path = require("path");

const filePath = path.join(__dirname, "files", "test.txt");

console.log(filePath);
```

---

# Environment Variables

Backend applications should never hardcode:

- API keys
- Database passwords
- Secret tokens

Instead, use environment variables.

---

## Install dotenv

Use the `dotenv` package:

```bash
npm install dotenv
```

---

## Create `.env` File

```env
PORT=5000
SECRET_KEY=mysecretkey
```

---

## Use Environment Variables

```js
require("dotenv").config();

console.log(process.env.PORT);
console.log(process.env.SECRET_KEY);
```

---

# Why Environment Variables Are Important

They help:

- Keep secrets secure
- Separate configuration from code
- Manage different environments easily

Examples:

- Development
- Testing
- Production
