# Prisma Practice — Bug Tracker

A small, from-scratch practice exercise. You'll model a **Bug Tracker** and run
CRUD against it with Prisma. No new concepts — just the moves you've already
learned, put together on a fresh domain.

## What you'll build

- A schema with a **Project** model, a **Bug** model, a **1-to-many relation**
  (a project has many bugs), and an **enum** for bug status.
- A `queries.js` that does four things: a **nested create**, a **read with
  `include`** (one query, no N+1), an **update**, and a **filtered + sorted read**.

## Setup

```bash
npm install
cp .env.example .env          # then edit .env with your PostgreSQL URL
```

Make sure your local PostgreSQL is running and the database in your URL exists.

## Do the work

1. Fill in `prisma/schema.prisma` (see the TODO in the file).
2. Create the tables:
   ```bash
   npx prisma migrate dev --name init
   ```
3. Fill in `queries.js` (see the four TODOs) and run it:
   ```bash
   node queries.js
   ```

## Submit

One **image or PDF** showing your `schema.prisma`, your `queries.js`, and the
terminal output of `node queries.js`. No zip files.
