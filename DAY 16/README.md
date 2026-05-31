# TypeScript Fundamentals for Node.js Backend

TypeScript is one of the most important skills for modern backend development. It helps catch errors during development, improves code quality, and makes large applications easier to maintain.

---

# Why Learn TypeScript?

### JavaScript Example

```js
const add = (a, b) => {
  return a + b;
};

add("10", 20);
```

Output:

```text
1020
```

No error is shown.

---

### TypeScript Example

```ts
const add = (a: number, b: number): number => {
  return a + b;
};

add("10", 20);
```

Output:

```text
Type Error
```

The error is caught before runtime.

---

# What is TypeScript?

TypeScript is a:

- Superset of JavaScript
- Statically Typed Language
- Compile-Time Error Checker

Benefits:

- Static Typing
- Better IDE Support
- Better Refactoring
- Improved Maintainability
- Fewer Runtime Errors

---

# TypeScript Setup

Install required packages:

```bash
npm init -y

npm install typescript

npm install -D ts-node nodemon
```

Initialize TypeScript:

```bash
npx tsc --init
```

---

# How TypeScript Works

```text
TypeScript Code
      ↓
TypeScript Compiler
      ↓
JavaScript Code
      ↓
Node.js Runtime
```

---

# Primitive Types

TypeScript provides built-in primitive types:

- string
- number
- boolean
- null
- undefined

Example:

```ts
let name: string = "Sanjay";

let age: number = 27;

let isAdmin: boolean = false;
```

---

# Arrays

Learn:

- string[]
- number[]
- boolean[]

Example:

```ts
const skills: string[] = ["React", "Node", "MongoDB"];
```

---

# Objects

Example:

```ts
const user: {
  name: string;
  age: number;
} = {
  name: "Sanjay",
  age: 27,
};
```

---

# Functions

Learn:

- Function Parameter Types
- Function Return Types

Example:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

# Optional Properties

Example:

```ts
type User = {
  name: string;
  email?: string;
};
```

Meaning:

```text
email is optional
```

---

# Interface

One of the most important TypeScript concepts.

Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Interfaces are heavily used in:

- Express
- React
- NestJS
- Prisma
- Large Applications

---

# Type Alias

Example:

```ts
type User = {
  id: number;
  name: string;
};
```

Understand the difference between:

- interface
- type

---

# Union Types

Example:

```ts
type Status = "active" | "inactive";
```

Usage:

```ts
let status: Status = "active";
```

---

# Enum

Enums represent a fixed set of values.

Example:

```ts
enum Role {
  ADMIN,
  USER,
}
```

Usage:

```ts
const role = Role.ADMIN;
```

---

# Generics

One of the most important TypeScript concepts.

Example:

```ts
function identity<T>(value: T): T {
  return value;
}
```

Usage:

```ts
identity<string>("hello");
```

Benefits:

- Reusability
- Type Safety
- Better Code Flexibility

---

# Classes

Example:

```ts
class User {
  constructor(public name: string) {}
}
```

Understand:

- public
- private
- protected
- constructor

---

# TypeScript Modules

Learn:

- export
- import

Example:

### add.ts

```ts
export const add = () => {};
```

### app.ts

```ts
import { add } from "./add";
```

---

# Express + TypeScript

Import Express types:

```ts
import express from "express";

import { Request, Response } from "express";
```

Example:

```ts
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});
```

---

# Benefits of TypeScript in Backend Applications

- Better Code Quality
- Fewer Runtime Errors
- Improved Refactoring
- Better Team Collaboration
- Strong Type Safety
- Easier Maintenance
- Better Developer Experience

---

# Interview Preparation

Prepare answers for:

- What is TypeScript?
- Why use TypeScript?
- What is transpilation?
- Interface vs Type?
- Enum vs Union?
- Any vs Unknown?
- What are Generics?
- Why are Generics useful?
- How does TypeScript help backend applications?

---

# Learning Roadmap

```text
TypeScript Basics
        ↓
Types
        ↓
Functions
        ↓
Objects
        ↓
Interfaces
        ↓
Type Aliases
        ↓
Union Types
        ↓
Enums
        ↓
Generics
        ↓
Classes
        ↓
Modules
        ↓
Express + TypeScript
        ↓
Production Backend Applications
```
