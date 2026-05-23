# Environment Variables + Config Management

Professional backend applications should never hardcode sensitive values such as:

- Database URLs
- API keys
- JWT secrets
- Application ports
- Cloud credentials

Instead, production applications use:

- Environment Variables
- Centralized Configurations
- Secure Secret Handling

This is extremely important in real-world backend systems.

---

# What Are Environment Variables?

Environment variables are external configuration values used by applications.

Example:

```env
PORT=5000
DB_URL=mongodb://localhost:27017/backend
JWT_SECRET=mysecretkey
```

Instead of hardcoding values like this:

```js
const PORT = 5000;
```

Use:

```js
process.env.PORT;
```

---

# Why This Is Important

Different environments require different configurations.

Examples:

- Local development
- Staging server
- Production server

Hardcoding values becomes risky and difficult to maintain.

---

# Bad Practice

Never hardcode secrets directly inside source code.

```js
const DB_PASSWORD = "mypassword";
```

---

# Good Practice

Use environment variables instead.

```js
const DB_PASSWORD = process.env.DB_PASSWORD;
```

---

# Install dotenv

We use the `dotenv` package to load environment variables from a `.env` file.

Install:

```bash
npm install dotenv
```

---

# Create `.env` File

Create a `.env` file in the root folder.

## File Structure

```bash
.env
```

---

# Example `.env`

```env
PORT=5000

DB_URL=mongodb://localhost:27017/todos

JWT_SECRET=supersecretkey

NODE_ENV=development
```

---

# Use dotenv in Application

## `src/app.js`

```js
require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# How dotenv Works

This line:

```js
require("dotenv").config();
```

loads all values from the `.env` file into:

```js
process.env;
```

Example:

```js
process.env.PORT;
process.env.DB_URL;
process.env.JWT_SECRET;
```

---

# Benefits of Configuration Management

- Improved security
- Easier environment management
- Cleaner codebase
- Better scalability
- Safer production deployments
- Easier team collaboration

---

# Common Environment Variables

| Variable     | Purpose                    |
| ------------ | -------------------------- |
| `PORT`       | Application port           |
| `DB_URL`     | Database connection string |
| `JWT_SECRET` | JWT authentication secret  |
| `NODE_ENV`   | Current environment        |

---

# Important Best Practices

- Never commit `.env` files to GitHub
- Add `.env` to `.gitignore`
- Use strong secret keys
- Keep production secrets secure
- Use centralized config management
