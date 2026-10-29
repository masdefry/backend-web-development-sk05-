Hello, Full Stack Web Development Students✌️!

🧑‍💻 How to Setup Express Typescript?

1.  Create New Directory for ExpressTS Projects

2.  Inside New Directory, Execute this Command:

        ➡️ npm init --yes

3.  Install Express Typescript & Nodemon

        ➡️ npm i express

        ➡️ npm i --save-dev @types/express

        ➡️ npm i -D typescript@5.7.2 ts-node@10.9.2 nodemon

4.  Install Database Client

            mysql           ➡️ npm i mysql2

            posgresql       ➡️ npm i pg

                            ➡️ npm i @types/pg --save-dev

5.  Initiate Typescript Configuration

        ➡️ npx tsc --init

6.  Replace `tsconfig.json` with This Configuration:

        {
            "compilerOptions": {
                "target": "ES6",
                "module": "commonjs",
                "outDir": "./dist",
                "rootDir": "./src",
                "strict": true,
                "esModuleInterop": true,
                "skipLibCheck": true
            }
        }

7.  Replace Property `scripts` on `package.json` with this Code:

        "scripts": {
                "dev": "nodemon src/server.ts",
                "build": "tsc",
                "start": "node dist/server.js"
        },

8.  Running Express Typescript Projects

        ➡️ npm run dev



🧑‍💻 How to Setup Prisma ORM?

    1. Install package(s)

            ➡️ npm install prisma@7 @types/node @types/pg --save-dev

            ➡️ npm install @prisma/client@7 @prisma/adapter-pg@7 pg dotenv@16

    2. Initialize Prisma ORM and create Prisma Postgres database

            ➡️ npx prisma init --datasource-provider postgresql

    3. Define data model

            model User {
                    id        String        @id @default(cuid())
                    email     String        @unique
                    name      String
                    password   String

                    user_addresses UserAddress[]

                    createdAt   DateTime  @default(now())
                    updatedAt   DateTime  @updatedAt
                    deletedAt   DateTime?

                    @@map("users")
            }

            model UserAddress{
                    id        Int     @id @default(autoincrement())
                    consignee String
                    address   String

                    userId    String @unique
                    users User @relation(fields: [userId], references: [id])

                    createdAt   DateTime  @default(now())
                    updatedAt   DateTime  @updatedAt
                    deletedAt   DateTime?

                    @@map("user_addresses")
            }

    4. Edit DATABASE_URL on file `env`

    5. Migrations

            ➡️ npx prisma migrate dev --name init

            ➡️ npx prisma generate


    6. Create configuration `Prisma Client`

                    import "dotenv/config";
                    import { PrismaPg } from '@prisma/adapter-pg'
                    import { PrismaClient } from '../generated/prisma/client'

                    const connectionString = `${process.env.DATABASE_URL}`

                    const adapter = new PrismaPg({ connectionString })
                    const prisma = new PrismaClient({ adapter })

                    export { prisma }

    📝
    Always execute `npx prisma generate` after doing migrate! ⚠️



🧑‍💻 How to Create Database Seeding?

    1. Create `seed.ts` inside `prisma` directory

    2. Add this code on `package.json`:

            "prisma": {
                    "seed": "node prisma/seed.ts"
            }

    3. Applying seeding data:

            ➡️ npx prisma db seed

    4. Reset database seeding

            ▪️Step-01

                    ➡️ npx prisma db push --force-reset

            ▪️Step-02

                    ➡️ npx prisma db push


                    
🧑‍💻 How to Formatting schema.prisma script?

    ➡️ npx prisma format

    ___ or ___

    ➡️ prisma format