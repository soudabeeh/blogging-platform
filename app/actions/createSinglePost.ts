const createSinglePost = async (item: any) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response;
  } catch (error) {}
};

export default createSinglePost;
