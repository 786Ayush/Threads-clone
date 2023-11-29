export function getFeeds(token) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // You can add more headers if needed
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function createFeed({ userData, token }) {
  console.log({ userData, token });
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: userData,
      });
      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("Response from server:", data);
      } else {
        // Handle error response
        console.error("Error uploading image:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  });
}
