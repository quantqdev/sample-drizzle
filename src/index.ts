import "dotenv/config";
import { faker } from "@faker-js/faker";
import { db, pool } from "./db";
import { NewUser, User, usersTable } from "./schema";

const main = async () => {
  const user: NewUser = {
    fullName: faker.person.fullName(),
    phone: faker.phone.number(),
  };
  const newUsers: NewUser[] = await db.insert(usersTable).values(user).returning();
  console.log(newUsers);

  const users: User[] = await db.select().from(usersTable);
  console.log(users);

  await pool.end();
};

main();
