# Backend Optimization & Performance

# Why Backend Optimization Matters?

A beginner backend developer focuses on:

```text
Can my API work?
```

A good backend developer focuses on:

```text
Can my API work fast?
```

A production backend should be:

- Fast
- Scalable
- Memory Efficient
- Cost Efficient

---

# Example

Imagine an API:

```http
GET /users
```

Database contains:

```text
100 users
```

Everything works perfectly.

After a year:

```text
1,000,000 users
```

The same API becomes:

- Slow
- Memory hungry
- Expensive

Optimization helps solve these issues.

---

# 1. Database Indexing

## What is an Index?

An index is similar to a book's index page.

Without index:

```text
Search user by email

Record 1
Record 2
Record 3
...
Record 1000000
```

MongoDB scans every document.

This is called:

```text
Collection Scan
```

Slow.

---

## With Index

MongoDB creates a lookup structure.

```text
abc@gmail.com → Document A
xyz@gmail.com → Document B
```

Now MongoDB directly jumps to the required document.

Much faster.

---

## Example

### User Schema

```js
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    index: true,
  },
});
```

---

## Query

```js
const user = await User.findOne({
  email: "john@gmail.com",
});
```

With index:

```text
Fast Lookup
```

Without index:

```text
Full Collection Scan
```

---

## Fields That Should Usually Be Indexed

- Email
- Username
- Phone Number
- Order ID
- Product ID
- Foreign Keys

---

# 2. Pagination

## Problem

Imagine:

```js
const users = await User.find();
```

Database:

```text
500,000 users
```

Result:

```text
Huge Response
High Memory Usage
Slow Network Transfer
```

Bad practice.

---

# Solution: Pagination

Return only a small subset.

Example:

```http
GET /users?page=1&limit=10
```

---

## Implementation

```js
const page = Number(req.query.page) || 1;

const limit = Number(req.query.limit) || 10;

const users = await User.find()
  .skip((page - 1) * limit)
  .limit(limit);
```

---

## Example

Page 1

```text
Users 1-10
```

Page 2

```text
Users 11-20
```

Page 3

```text
Users 21-30
```

---

## Benefits

- Smaller responses
- Better performance
- Less memory usage

---

# 3. Projection

## What is Projection?

Fetching only required fields.

---

## Bad

```js
const users = await User.find();
```

Response:

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "hashed-password",
  "address": "USA",
  "city": "New York"
}
```

Many unnecessary fields.

---

## Good

```js
const users = await User.find().select("name email");
```

Response:

```json
{
  "name": "John",
  "email": "john@gmail.com"
}
```

---

## Benefits

- Smaller response
- Faster query
- Less bandwidth

---

# 4. Lean Queries

One of the most important Mongoose optimizations.

---

## Normal Query

```js
const users = await User.find();
```

Returns:

```text
Mongoose Documents
```

Contains:

- Virtuals
- Methods
- Getters
- Setters

Consumes more memory.

---

## Lean Query

```js
const users = await User.find().lean();
```

Returns:

```text
Plain JavaScript Objects
```

Much faster.

---

## Example

### Normal

```js
const users = await User.find();
```

Type:

```text
Mongoose Document
```

---

### Lean

```js
const users = await User.find().lean();
```

Type:

```text
JavaScript Object
```

---

## Best Practice

For read-only APIs:

```js
const users = await User.find().select("name email").lean();
```

---

# 5. Event Loop Blocking

## Node.js Architecture

Node.js runs on:

```text
Single Thread
Single Event Loop
```

---

## Bad Example

```js
while (true) {
  console.log("Hello");
}
```

Result:

```text
Server Frozen
```

No other request can execute.

---

## Another Example

```js
for (let i = 0; i < 10000000000; i++) {}
```

Result:

```text
CPU Busy
API Stops Responding
```

---

# Why?

Node.js has one main thread.

Heavy synchronous operations block it.

---

# 6. Sync vs Async Operations

## Synchronous

```js
const fs = require("fs");

const data = fs.readFileSync("file.txt");

console.log(data);
```

Problem:

```text
Blocks Event Loop
```

---

## Asynchronous

```js
const fs = require("fs/promises");

const data = await fs.readFile("file.txt");
```

Benefits:

```text
Non Blocking
Better Performance
```

---

# 7. Redis Caching

## Without Cache

```text
Client
 ↓
Server
 ↓
MongoDB
 ↓
Response
```

Every request hits MongoDB.

---

## With Cache

```text
Client
 ↓
Server
 ↓
Redis
 ↓
MongoDB (Only if Needed)
 ↓
Response
```

---

# Example

First Request

```text
Cache Miss
```

MongoDB queried.

Data saved in Redis.

---

Second Request

```text
Cache Hit
```

Data returned directly from Redis.

No MongoDB call.

---

## Example Code

```js
const cachedUsers = await redisClient.get("users");

if (cachedUsers) {
  return JSON.parse(cachedUsers);
}

const users = await User.find();

await redisClient.set("users", JSON.stringify(users));
```

---

# 8. Compression

Large API responses consume bandwidth.

---

## Install

```bash
npm install compression
```

---

## Usage

```js
const compression = require("compression");

app.use(compression());
```

---

## Example

Without Compression:

```text
500 KB Response
```

With Compression:

```text
100 KB Response
```

Faster transfers.

---

# 9. Rate Limiting

Protect APIs from abuse.

---

## Example

Limit:

```text
100 requests per minute
```

---

## Install

```bash
npm install express-rate-limit
```

---

## Example

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
});

app.use(limiter);
```

---

## Benefits

- Prevent brute force attacks
- Prevent API abuse
- Protect server resources

---

# 10. Logging

Logs help identify:

- Errors
- Slow APIs
- Traffic
- Debugging Issues

---

## Morgan

```bash
npm install morgan
```

---

## Example

```js
const morgan = require("morgan");

app.use(morgan("dev"));
```

---

Output:

```text
GET /users 200 25ms
POST /login 201 32ms
```

---

# 11. N+1 Query Problem

## Bad Example

```js
const users = await User.find();

for (const user of users) {
  await Order.find({
    userId: user._id,
  });
}
```

For:

```text
100 Users
```

Queries:

```text
1 User Query
100 Order Queries
```

Total:

```text
101 Queries
```

Very inefficient.

---

## Better Approach

Use:

```js
populate();
```

or

```js
aggregation;
```

---

Example

```js
await User.find().populate("orders");
```

---

# Production Ready Query

## Beginner Version

```js
const users = await User.find();
```

---

## Optimized Version

```js
const users = await User.find().select("name email").skip(0).limit(10).lean();
```

Benefits:

- Pagination
- Projection
- Lean Query
- Smaller Response

---

# Backend Optimization Checklist

Before production deployment:

- [ ] Use Indexes
- [ ] Implement Pagination
- [ ] Use Projection
- [ ] Use Lean Queries
- [ ] Enable Redis Cache
- [ ] Enable Compression
- [ ] Configure Rate Limiting
- [ ] Add Logging
- [ ] Avoid Sync Operations
- [ ] Prevent N+1 Queries

---

# Interview Questions

### What is Indexing?

A technique used to improve query performance.

---

### What is Pagination?

Fetching data in smaller chunks instead of all records.

---

### What is Projection?

Selecting only required fields from the database.

---

### Why use `.lean()`?

Returns plain JavaScript objects and improves performance.

---

### What blocks Node.js Event Loop?

Examples:

```js
while (true) {}
```

```js
fs.readFileSync();
```

Heavy CPU tasks.

---

### Why use Redis?

For caching frequently accessed data.

---

### Why avoid `find()` without pagination?

Large datasets increase memory usage and slow responses.

---

### What is Compression?

Reducing response size before sending data to the client.

---
