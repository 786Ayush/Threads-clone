import { resolvePath } from "react-router-dom";

export function getFeeds(token) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/posts", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // You can add more headers if needed
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function createFeed({ userData, token }) {
  // console.log({ userData, token });
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        console.error("Error uploading image:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  });
}

export function updateLike({ username, action, token, id }) {
  // console.log({ username, action, token, id });
  return new Promise(async (resolve) => {
    try {
      const response = await fetch(`http://localhost:8080/posts/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          action,
          username,
        }),
      });
      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        // console.log("Response from server:", data);
        resolve({ data });
      } else {
        // Handle error response
        console.error("Error :", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  });
}
export function getFeedsbyId({ token, id }) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/posts/${id}`, {
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

export function getFeedsbyUserId({ token, id }) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8080/posts/userIdpost/${id}`,
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
