// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
// A mock function to mimic making an async request for data
export function Signup(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://threads-clone-jb28.onrender.com/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function Login({ username, password }) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://threads-clone-jb28.onrender.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    // console.log({ data });
    resolve({ data });
  });
}
export function editProfile({ userData, token, id }) {
  return new Promise(async (resolve) => {
    const response = await fetch(`https://threads-clone-jb28.onrender.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: userData.name,
        bio: userData.bio,
        imageURL: userData.imageUrl,
      }),

      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve(data);
  });
}

export function CheckUser(token) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://threads-clone-jb28.onrender.com/auth/check", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function getUserbyId({ token, id }) {
  // console.log({token,id});
  return new Promise(async (resolve) => {
    const response = await fetch(`https://threads-clone-jb28.onrender.com/users/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function getUserByUsername({ username, token }) {
  return new Promise(async (resolve) => {
    // console.log({username,token})
    const response = await fetch("https://threads-clone-jb28.onrender.com/users/search", {
      method: "POST",
      body: JSON.stringify({ username }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function addFollowing({ id, username, token }) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `https://threads-clone-jb28.onrender.com/users/${id}/followings/add`,
      {
        method: "POST",
        body: JSON.stringify({ username }),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function addFollower({ id, username, token }) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `https://threads-clone-jb28.onrender.com/users/${id}/followers/add`,
      {
        method: "POST",
        body: JSON.stringify({ username }),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function getFollowers({ id, token }) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `https://threads-clone-jb28.onrender.com/users/${id}/followers`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function getFollowings({ id, token }) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `https://threads-clone-jb28.onrender.com/users/${id}/followings`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
