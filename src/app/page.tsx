import { db } from "@/db";
import { users } from "@/db/schema";

export default async function Home() {
  const allUsers = await db.select().from(users);
  return <>{JSON.stringify(allUsers, null, 2)}</>;
}
