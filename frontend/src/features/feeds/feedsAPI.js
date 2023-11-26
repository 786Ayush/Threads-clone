
export function getFeeds(token) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/posts',{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
        // You can add more headers if needed
      },
    });
    const data=await response.json();
    resolve({data});
  });
}