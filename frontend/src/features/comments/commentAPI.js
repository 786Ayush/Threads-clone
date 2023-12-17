// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
export function getcommentsbyId({ token, id }) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `/comments/getcomment/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          // You can add more headers if needed
        },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
export function createcomment({ token, postId, content, username, imageUrl }) {
  return new Promise(async (resolve) => {
    const response = await fetch(`/comments/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // You can add more headers if needed
      },
      body: JSON.stringify({
        content: content,
        username: username,
        imageUrl: imageUrl,
      }),
    });
    const data = await response.json();
    resolve({ data });
  });
}
