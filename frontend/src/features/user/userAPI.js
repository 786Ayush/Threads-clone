// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
// A mock function to mimic making an async request for data
export function Signup(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data=await response.json();
    resolve({data});
  });
}



export function Login(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data=await response.json();
    resolve({data});
  });
}
export function editProfile(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/user/:id', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'content-type': 'application/json',
        "Authorization": `Bearer ${userData.token}`, 
      },
    });
    const data=await response.json();
    resolve({data});
  });
}

export function CheckUser(token) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/auth/check', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        "Authorization": `Bearer ${token}`, 
      },
    });
    const data=await response.json();
    resolve({data});
  });
}