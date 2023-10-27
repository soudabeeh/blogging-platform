"use server";

import { revalidateTag, revalidatePath } from "next/cache";
import createSinglePost from "./actions/createSinglePost";

export async function revalidatePosts() {
  revalidateTag("posts");
  //revalidatePath("/posts");
}
