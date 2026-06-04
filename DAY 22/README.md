# Redis & Caching with Node.js

### Redis

### What Problem Does Redis Solve?

Imagine: GET /users

Every request:

```text
MongoDB Query
MongoDB Query
MongoDB Query
MongoDB Query
```

Even if the data hasn't changed.

---

Without Redis

```text
Request
   ↓
MongoDB
   ↓
Response
```

With Redis

```text
Request
   ↓
Redis
   ↓
Cache Hit?
   ↓
Yes → Return Data

No
 ↓
MongoDB
 ↓
Save in Redis
 ↓
Response
```

---

### What is Redis?

Redis means `REmote DIctionary Server`.
It is `In-Memory Database` meaning data is stored in RAM.

---

### Why Redis is Fast?

MongoDB: Disk Storag
Redis RAM Storag RAM is much faster.

---

### Real World Usage

Companies use Redis for:

- Caching
- Sessions
- OTP Storage
- Rate Limiting
- Leaderboards
- Queues
- Live Notifications

---

### Redis Data Types

- Strings - SET name Sanjay
- Hashes - {"name": "Sanjay", "city": "Shimoga"}
- Lists - Messages
- Sets - Unique values - Tags

---

### What is TTL?

TTL means Time To Live. It is the expiration time for a key in Redis.

Example:

```text
SET otp 123456 EX 60
```

Meaning: Expire after 60 seconds

#### Redis Lifecycle

```text
Store: OTP
↓
60 seconds
↓
Automatically deleted
```

---

### Cache

Most common caching strategy.

Without Cache

```text
Request
↓
MongoDB
↓
Response
```

With Cache

```text
Request
↓
Redis
↓
Found?
↓
Yes → Response

No
↓
MongoDB
↓
Redis Save
↓
Response
```

---

### Interview Questions & Answers

## What is Redis?

**Answer:**

Redis is an in-memory key-value data store used for caching, session storage, rate limiting, and other high-performance backend operations.

---

## Why is Redis Faster Than MongoDB?

**Answer:**

Redis stores data in RAM, while MongoDB primarily stores data on disk.

Since RAM access is significantly faster than disk access, Redis provides much lower latency.

---

## What is TTL?

**Answer:**

TTL (Time To Live) defines how long a key should exist in Redis before it expires automatically.

Example:

```text
OTP valid for 5 minutes
```

---

## What is Caching?

**Answer:**

Caching is the process of temporarily storing frequently accessed data to reduce database load and improve application performance.

---

## What is Cache Invalidation?

**Answer:**

Cache invalidation is the process of removing or updating outdated cached data when the original data changes.

---

## What is Cache Aside Pattern?

**Answer:**

Cache Aside is a caching strategy where:

1. Check Redis first.
2. If data exists, return it.
3. If data does not exist, fetch from the database.
4. Store it in Redis.
5. Return the response.

---

## Redis vs MongoDB?

**Answer:**

| Redis             | MongoDB           |
| ----------------- | ----------------- |
| In-Memory - RAM   | Disk-Based        |
| Cache Layer       | Primary Database  |
| Ultra Fast        | Fast              |
| Temporary Storage | Permanent Storage |
| TTL Support       | Persistent Data   |

---

## When Should Redis Be Used?

**Answer:**

Redis should be used when applications require:

- Fast Data Retrieval
- Caching
- Session Management
- OTP Storage
- Rate Limiting
- Real-Time Features
- Temporary Data Storage

---

### Real Backend Features Using Redis

#### OTP Service

```text
Phone Number → OTP
```

---

#### Login Sessions

```text
User → Session
```

---

#### API Cache

```text
Products
Users
Notes
```

---

#### Login Sessions

```text
100 Requests / Minute
```

---
