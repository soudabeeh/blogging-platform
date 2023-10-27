"use server";

import { revalidateTag, revalidatePath } from "next/cache";

export async function revalidatePosts() {
  revalidateTag("posts");
  //revalidatePath("/posts");
}
