# Prisma ORM with MongoDB

Install Dependencies
Runtime
npm install express
npm install @prisma/client

Dev Dependencies
npm install -D typescript
npm install -D ts-node
npm install -D nodemon
npm install -D prisma
npm install -D @types/node
npm install -D @types/express

Initialize TypeScript
npx tsc --init

Initialize Prisma
npx prisma init
Generates:

prisma/
.env

Configure MongoDB
.env
Local MongoDB: DATABASE_URL="mongodb://localhost:27017/prisma-learning"

or Atlas: DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/prisma-learning"

Prisma Schema
prisma/schema.prisma

generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "mongodb"
url = env("DATABASE_URL")
}

model User {
id String @id @default(auto()) @map("\_id") @db.ObjectId
name String
email String @unique
createdAt DateTime @default(now())
}

Understanding MongoDB Model
@id - Primary key.
@default(auto()) - Generate ObjectId.
@map("\_id") - Maps Prisma id → MongoDB \_id.
@db.ObjectId - MongoDB ObjectId type.

Generate Client - npx prisma generate
