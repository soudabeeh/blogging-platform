const getAllPosts = async () => {
  new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { tags: ["posts"] },
    });
    if (!response.ok) {
      throw new Error("failed to fetch posts");
    }
    return await response.json();
  } catch (error) {}
};

export default getAllPosts;
