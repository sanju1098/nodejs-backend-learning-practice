Database-Driven Backend APIs

using:

MongoDB
Mongoose

What is Mongoose?

Mongoose is an ODM.

ODM = Object Document Mapper

It helps Node.js talk to MongoDB easily.

Without Mongoose:

❌ raw MongoDB queries become harder

With Mongoose:

✅ cleaner schemas
✅ validations
✅ models
✅ easier queries

Install Dependencies

Inside your project:

npm install mongoose
📌 PART 3 — Start MongoDB

Make sure MongoDB server is running.

Test MongoDB

Run:

mongosh

If shell opens:

✅ MongoDB is running

Update .env

Add MongoDB connection URL.

.env
PORT=5000

NODE_ENV=development

APP_NAME=Notes API

DB_URL=mongodb://127.0.0.1:27017/notes-app
🧠 What This Means
mongodb://127.0.0.1:27017/notes-app
Part Meaning
mongodb:// MongoDB protocol
127.0.0.1 local machine
27017 MongoDB default port
notes-app database name

Create Database Connection
New Structure
src/
│
├── config/
│ ├── index.js
│ └── db.js

Understanding Schemas

Schemas define structure for documents.

Like blueprint/rules.

Example
title: String
content: String

Why Schemas Matter

Schemas help:

✅ validation
✅ consistency
✅ cleaner structure
