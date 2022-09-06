# Sample App

## Develop

### First time setup

Install dependencies:

```bash
yarn
```

The local development database is using [SQLite](https://www.sqlite.org/). Create an empty SQLite db file:

```bash
touch prisma/db.sqlite
```

Migrate tables to the database:

```bash
npx prisma migrate dev
```

### After setup

Run dev server:

```bash
yarn dev
```

## Technologies

* [Next.js](https://nextjs.org/) as React Framework.
* [ Prisma ](https://www.prisma.io/) as Database ORM.
* [Tailwind](https://tailwindcss.com/) for styling.
* [Eslint](https://eslint.org/), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged) for linting and code quality.
