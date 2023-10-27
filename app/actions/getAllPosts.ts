const getAllPosts = async (pageNumber: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber || 1}`,
      {
        next: { tags: ["posts"], revalidate: 1200 },
      }
    );
    if (!response.ok) {
      throw new Error("failed to fetch posts");
    }
    return await response.json();
  } catch (error) {}
};

export default getAllPosts;
