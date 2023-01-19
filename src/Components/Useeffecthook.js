import {useState, useEffect } from 'react';

function Useeffecthook({ id }) {
  const [user, setUser] = useState({});

  //Cors policy issue
//   useEffect(() => {
//     const fetchUser = async () => {
//       const response = await fetch(`https://my-api.com/users/${id}`);
//       const user = await response.json();
//       setUser(user);
//     };
//     fetchUser();
//   }, [id]);

  //No Cors policy issue
//   useEffect(() => {
//     const fetchUser = async () => {
//       const response = await fetch(`https://proxy.cors.sh/https://my-api.com/users/${id}`);
//       const user = await response.json();
//       setUser(user);
//     };
//     fetchUser();
//   }, [id]);

useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/https://proxy.cors.sh/https://my-api.com/users/${id}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        if (!response.headers.get("content-type").includes("application/json")) {
          throw new Error("Response is not in JSON format");
        }
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [id]);


  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default Useeffecthook;
