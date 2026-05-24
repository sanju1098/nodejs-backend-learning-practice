# Database Fundamentals

Real backend systems need:

- Persistent storage
- Scalable data handling
- Fast querying
- Reliable storage

That’s where databases come in.

Databases provide:

- Permanent storage
- Fast searching
- Query systems
- Indexing
- Scalability
- Relationships
- Concurrency handling

---

# Types of Databases

There are two major database categories.

| Type  | Examples          |
| ----- | ----------------- |
| SQL   | MySQL, PostgreSQL |
| NoSQL | MongoDB           |

---

# SQL Databases

SQL stands for:

> Structured Query Language

Examples:

- MySQL
- PostgreSQL

---

# SQL Stores Data in Tables

## Example: Users Table

| id  | name   | email          |
| --- | ------ | -------------- |
| 1   | Sanjay | test@gmail.com |

---

## Example: Orders Table

| id  | userId | total |
| --- | ------ | ----- |
| 1   | 1      | 500   |

---

# Key Concepts in SQL

SQL databases use:

- Tables
- Rows
- Columns
- Relationships

---

# SQL Relationships

Example:

One user can have many orders.

```text
users.id → orders.userId
```

This is called:

> One-to-Many Relationship

---

# Advantages of SQL

- Strong relationships
- Structured schema
- Transactional systems
- Consistency

---

# Best Use Cases for SQL

SQL databases are great for:

- Banking systems
- Payment systems
- Inventory systems
- Accounting systems

---

# NoSQL Databases

NoSQL means:

> Non-relational database

Most popular NoSQL database:

- MongoDB

---

# MongoDB Stores Data as Documents

Instead of tables:

- Collections

Instead of rows:

- Documents

---

# Example MongoDB Document

```json
{
  "_id": "123",
  "title": "Learn Backend",
  "content": "Practice daily",
  "tags": ["node", "express"]
}
```

---

# Example Collections

- notes
- users
- products
- orders

---

# Why MongoDB Is Popular With Node.js

MongoDB works very naturally with JavaScript because of its JSON-like structure.

Benefits:

- JSON-like data
- Flexible schema
- Easy to learn
- Fast development
- Natural JavaScript integration

---

# SQL vs MongoDB

| SQL                | MongoDB              |
| ------------------ | -------------------- |
| Tables             | Collections          |
| Rows               | Documents            |
| Columns            | Fields               |
| Fixed schema       | Flexible schema      |
| Relationship-heavy | Flexible nested data |

---

# Real Backend Example

## SQL Style

### notes table

| id  | title      | content       |
| --- | ---------- | ------------- |
| 1   | Learn Node | Practice APIs |

---

## MongoDB Style

```json
{
  "_id": "1",
  "title": "Learn Node",
  "content": "Practice APIs"
}
```

---

# Understanding Persistence

Persistence means:

> Data survives server restart

Example:

```text
Restart Server
      ↓
Data Still Exists
```

That is what databases provide.

---

# Basic Database Terminology

## SQL Terms

| Concept     | Meaning        |
| ----------- | -------------- |
| Table       | Data structure |
| Row         | Single record  |
| Column      | Field          |
| Primary Key | Unique ID      |

---

## MongoDB Terms

| Concept    | Meaning            |
| ---------- | ------------------ |
| Database   | Collection group   |
| Collection | Group of documents |
| Document   | Single record      |
| Field      | Property           |

---

# Relationships

Relationships are a very important backend concept.

---

# One-to-One Relationship

Example:

```text
User → Profile
```

One user has one profile.

---

# One-to-Many Relationship

Example:

```text
User → Notes
```

One user can have many notes.

---

# Many-to-Many Relationship

Example:

```text
Students ↔ Courses
```

Many students can take many courses.

---

# Why Learn MongoDB First?

MongoDB is beginner-friendly because it provides:

- JSON-like data
- Flexible schemas
- Less setup complexity
- Natural integration with Node.js

That’s why many backend developers start with MongoDB before learning SQL deeply.

---

# Install MongoDB

Install:

- MongoDB Community Server
- MongoDB Compass

---

# What is MongoDB Compass?

MongoDB Compass is a GUI tool for MongoDB.

Think of it like:

> VS Code for databases

You can:

- View collections
- Insert documents
- Delete data
- Run queries

without terminal commands.

---

# MongoDB Installation Steps

## Install MongoDB Server

During installation:

- Install as service

This allows MongoDB to run locally.

---

# Verify Installation

Run:

```bash
mongosh
```

If it opens successfully:

- MongoDB is installed correctly

---

# Basic MongoDB Concepts

## Database

Example:

```text
notes-app
```

---

## Collection

Examples:

- notes
- users

---

## Document

Example:

```json
{
  "title": "MongoDB",
  "content": "Learn collections"
}
```

---

# How Backend Connects to Database

This is a very important backend concept.

---

# Backend Flow

```text
Client
   ↓
API
   ↓
Database Query
   ↓
Database
   ↓
Response
```

---

# Example

Request:

```http
GET /notes
```

Backend:

```text
Find all notes from database
```

Response:

```json
[]
```

---

# Real Production Thinking

Backend developers must think about:

- Data modeling
- Scalability
- Relationships
- Query efficiency
- Persistence

not just APIs.

---

# Database Design Thinking

Example:

## Ecommerce Application

Possible collections/tables:

- users
- products
- orders
- payments
- reviews
- cart

Backend engineering often starts with:

> Data design first
