import TesteContext from "@/components/Test";
import SectionAuto from "@/components/Test/SectionAuto/SectionAuto";
import { db } from "@/db";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";

export default async function Login() {
  const allUsers = await db.select().from(users);

  async function addUser(data: FormData) {
    "use server";

    const fullName = data.get("fullName")?.toString();
    const phone = data.get("numerPhone")?.toString();

    if (!fullName || !phone) return;

    await db.insert(users).values({
      fullName,
      phone,
    });
    revalidatePath("/");
  }

  return (
    <SectionAuto>
      {JSON.stringify(allUsers, null, 2)}
      <form action={addUser}>
        <input type="text" name="fullName" />
        <input type="text" name="numerPhone" />
        <button type="submit">Enviar</button>
      </form>
      <div>
        <TesteContext />
      </div>
    </SectionAuto>
  );
}
