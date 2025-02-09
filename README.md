# To-Do List Project with Node.js, Prisma, and TypeScript

This document outlines the step-by-step guide to setting up the development environment for the **To-Do List** project using **Node.js**, **Prisma**, and **TypeScript**.

## Step 1: Initialize the Node.js Project

Start by initializing a new Node.js project. This will create the `package.json` file with the default configuration.

```bash
npm init -y  # To skip manual configuration of the project
```

Alternatively, you can run the following command if you want to manually add the project name, version, license, etc.

```bash
npm init  # To configure the project manually 
```

## Step 2: Install Production Dependencies

Install the necessary production dependencies for the project:

```bash
npm install express dotenv @prisma/client
```
- **express**: Web framework for Node.js.
- **dotenv**: Loads environment variables from a `.env` file.
- **@prisma/client**: Prisma client to interact with the database.

## Step 3: Install Development Dependencies

Install the necessary development dependencies for the project:

```bash
npm install --save-dev prisma tsx @types/express @types/node
```

- **prisma**: Tool for managing the database and generating migrations.
- **tsx**: Allows running TypeScript files without the need for pre-compilation.
- **@types/express**: Type definitions for `Express.`
@types/node: TType definitions for `Node.js`.


## Step 4:  Initialize TypeScript

Run the following command to initialize TypeScript and generate the `tsconfig.json` file:

```bash
npx tsc --init
```
The `tsconfig.json` file will be generated. 


## Step 5: Configure `tsconfig.json`

After initializing TypeScript with `npx tsc --init` in the step 4, modify the `tsconfig.json` file as needed. Ensure that the directory options are correctly set for better code organization.

You can configure the following options:

- `"moduleResolution": "node"` – Ensures proper module resolution.
- `"rootDir": "./src"` – Defines the root directory for TypeScript source files.
- `"outDir": "./dist"` – Specifies the output directory for compiled JavaScript files.


## Step 6: Initialize Prisma
Now, initialize Prisma to create the necessary file structure. Run the following command:

```bash
npx prisma init
```
This command will generate the `prisma/schema.prisma` file and the `.env` file, where the `DATABASE_URL` variable will be configured.


## Step 7: Configure the Database

In the `.env` file, set the `DATABASE_URL` variable for the **PostgreSQL** database that will be used in the project:

```bash
.env  # This is the content inside the .env file

PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/to-do-list?schema=public"
# user -> your PostgreSQL username
# password -> your PostgreSQL user's password
# to-do-list -> database name

```
In the `prisma/schema.prisma` file, the `datasource db` block will already be configured to use this environment variable.

Example configuration:

```bash
# Inside the file ./prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
### Step 8: Create the Database (If Necessary)

Prisma does not automatically create the database. If the database does not exist yet, create it manually. If you are using PostgreSQL, for example:

```bash
psql -U postgres -c "CREATE DATABASE to_do_list;"
```
Alternatively, you can use database management clients like `DBeaver`.

## Step 9: Run Migrations

After configuring the database, run the migrations to create the tables in the database:

```bash
npx prisma migrate dev
```
This command applies the migrations defined in schema.prisma to create the tables in the database.

