import "dotenv/config";
import { db, pool } from "./db";
import { NewUser, User, usersTable } from "./schema";

const main = async () => {
  const user: NewUser = {
    fullName: "test",
    phone: "0123456789",
  };
  const newUsers: NewUser[] = await db.insert(usersTable).values(user).returning();
  console.log(newUsers);

  const users: User[] = await db.select().from(usersTable);
  console.log(users);

  await pool.end();
};

main();
