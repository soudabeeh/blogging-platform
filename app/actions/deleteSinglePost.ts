import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const deleteSinglePost = async (postId: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "DELETE",
      }
    );
    return response;
  } catch (error) {}
};

export default deleteSinglePost;
