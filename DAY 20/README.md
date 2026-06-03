# Deployment with Render

# What is Deployment?

So far, your API runs locally:

```text
Your Computer
    ↓
localhost:5000
```

Only your machine can access it.

Deployment means hosting your application on a server so that anyone can access it through a public URL.

```text
Your Computer
      ↓
GitHub
      ↓
Render
      ↓
Public URL
```

---

# Deployment Architecture

```text
Express API
      ↓
GitHub Repository
      ↓
Render Server
      ↓
MongoDB Atlas
```

---

# Prerequisites

Make sure you have:

- Git Installed
- GitHub Account
- Render Account
- MongoDB Atlas Account

---

# Step 1: Prepare Existing Project

We'll use the Notes API built in previous days.

Example:

```text
notes-api
```

---

## Update package.json

Ensure the following scripts exist:

```json
{
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  }
}
```

Render uses:

```bash
npm start
```

to start the application.

---

# Step 2: Configure Port Properly

Avoid:

```js
app.listen(5000);
```

Instead:

```js
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
```

### Why?

Render assigns its own port dynamically.

Example:

```env
PORT=10000
```

Your application must use that port.

---

# Step 3: Create .gitignore

Create:

```gitignore
node_modules
.env
logs
uploads
```

Never commit:

- Environment files
- Secrets
- JWT Keys
- Database URLs

---

# Step 4: Push Project to GitHub

Initialize Git:

```bash
git init
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial commit"
```

Create a repository on GitHub.

Example:

```text
notes-api
```

Connect repository:

```bash
git remote add origin https://github.com/yourusername/notes-api.git
```

Push code:

```bash
git branch -M main

git push -u origin main
```

---

# Step 5: Setup MongoDB Atlas

Local MongoDB:

```env
mongodb://localhost:27017
```

will NOT work after deployment.

Why?

```text
Render cannot access your local machine.
```

Use MongoDB Atlas instead.

---

## Create Atlas Account

Visit:

https://www.mongodb.com/atlas

Create:

```text
Free Cluster
```

---

## Create Database User

Example:

```text
Username: admin
Password: admin123
```

---

## Configure Network Access

Allow:

```text
0.0.0.0/0
```

This allows connections from anywhere.

---

## Get Connection String

Example:

```env
mongodb+srv://admin:admin123@cluster.mongodb.net/notesdb
```

Save this for deployment.

---

# Step 6: Create Render Account

Visit:

https://render.com

Login using GitHub.

---

# Step 7: Create New Web Service

Inside Render Dashboard:

```text
New +
    ↓
Web Service
    ↓
Connect GitHub Repository
```

Select your repository:

```text
notes-api
```

---

# Step 8: Configure Render Service

### Service Name

```text
notes-api
```

### Environment

```text
Node
```

### Build Command

```bash
npm install
```

### Start Command

```bash
npm start
```

---

# Step 9: Configure Environment Variables

Add the following variables:

```env
PORT=10000

MONGO_URI=your-mongodb-atlas-url

JWT_SECRET=your-secret-key
```

These values should match your local `.env`.

---

# Step 10: Deploy Application

Click:

```text
Create Web Service
```

Render performs:

```text
Install Dependencies
      ↓
Build Project
      ↓
Start Server
      ↓
Deploy
```

Expected logs:

```text
Connected to MongoDB
Server Running
```

---

# Step 11: Test Deployed API

Render provides a public URL:

```text
https://notes-api.onrender.com
```

---

## Test Root Endpoint

```http
GET /
```

Example:

```http
GET https://notes-api.onrender.com
```

---

## Test Login API

```http
POST /auth/login
```

---

## Test Notes API

```http
GET /notes
```

---

# Production Best Practices

## Never Commit

```text
.env
node_modules
Secrets
JWT Keys
Database URLs
```

---

## Always Use

```text
Environment Variables
MongoDB Atlas
Proper Logging
Error Handling
```

# Interview Questions

### What is deployment?

### Why use process.env.PORT?

### Why doesn't localhost MongoDB work in production?

### What is MongoDB Atlas?

### Why use environment variables?

### What is the difference between build command and start command?

### Difference between development and production environments?

---
