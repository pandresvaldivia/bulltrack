# Bulltrack

## Getting Started

Install dependencies:

```bash
yarn
```

Start the Docker services:

```bash
docker compose up -d
```

Create a `.env` file in the root directory with the following content:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/bulltrack-db"
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Run the database migrations:

```bash
npx prisma migrate dev
```

Seed the database:

```bash
npx prisma db seed
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
