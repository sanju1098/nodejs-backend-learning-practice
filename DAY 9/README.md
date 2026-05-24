# Database-Driven Backend APIs

In modern backend applications, databases are connected using tools like:

- MongoDB
- Mongoose

---

# What is Mongoose?

[Mongoose](https://mongoosejs.com/) is an ODM.

ODM stands for:

> Object Document Mapper

Mongoose helps Node.js applications communicate with MongoDB easily.

---

# Why Use Mongoose?

Without Mongoose:

- Raw MongoDB queries become difficult
- Validation handling becomes messy
- Data structure management becomes harder

With Mongoose:

- Cleaner schemas
- Built-in validations
- Models for database collections
- Easier database queries

---

# Install Dependencies

Inside your project directory, install Mongoose:

```bash
npm install mongoose
```

---

# Start MongoDB Server

Make sure MongoDB server is running locally.

---

# Test MongoDB Installation

Run:

```bash
mongosh
```

If MongoDB shell opens successfully:

- MongoDB is running correctly

---

# Update `.env` File

Add MongoDB connection URL.

## `.env`

```env
PORT=5000

NODE_ENV=development

APP_NAME=Notes API

DB_URL=mongodb://127.0.0.1:27017/notes-app
```

---

# Understanding MongoDB Connection URL

```text
mongodb://127.0.0.1:27017/notes-app
```

| Part         | Meaning              |
| ------------ | -------------------- |
| `mongodb://` | MongoDB protocol     |
| `127.0.0.1`  | Local machine        |
| `27017`      | Default MongoDB port |
| `notes-app`  | Database name        |

---

# Create Database Connection

## Recommended Folder Structure

```bash
src/
│
├── config/
│   ├── index.js
│   └── db.js
```

---

# Example Database Connection

## `src/config/db.js`

```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Database connection failed");

    process.exit(1);
  }
};

module.exports = connectDB;
```

---

# Use Database Connection in App

## `src/app.js`

```js
require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# Understanding Schemas

Schemas define the structure of MongoDB documents.

Think of schemas as:

> Blueprint or rules for data

---

# Example Schema Structure

```js
title: String;
content: String;
```

---

# Why Schemas Matter

Schemas help with:

- Validation
- Consistency
- Cleaner data structure
- Data integrity
- Better maintainability

---

# Example Notes Schema

## `src/models/note.model.js`

```js
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
```

---

# Important Mongoose Concepts

| Concept    | Meaning              |
| ---------- | -------------------- |
| Schema     | Structure definition |
| Model      | Collection handler   |
| Document   | Single record        |
| Collection | Group of documents   |

---

# Example Flow

```text
Client Request
      ↓
Express Route
      ↓
Controller
      ↓
Mongoose Model
      ↓
MongoDB Database
      ↓
Response
```

---

# Why Mongoose Is Popular

Mongoose is widely used because it provides:

- Cleaner code
- Better validation
- Easier database interaction
- Structured backend architecture
- Strong Node.js ecosystem support
