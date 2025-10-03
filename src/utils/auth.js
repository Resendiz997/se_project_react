const BASE_URL = "http://localhost:3001";

export const register = ({name, avatar, email, password}) => {
    return fetch (`${BASE_URL}/signup`, {
method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({ name, avatar, email, password }),
    })
    .then ((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  })
};

export const authorize = ({email, password}) => {
    return fetch (`${BASE_URL}/signin`,{
method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({ email, password }),
})
.then((res) =>{
  if (!res.ok) {
    throw new Error('Login failed');
  }
  return res.json();
});
};


export const checkToken = (token) =>{
  console.log("About to check token:", token)
  return fetch (`${BASE_URL}/users/me`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error('Token invalid');
      }
      return response.json();
    });
};



export const getItems = () => {
  return fetch (`${BASE_URL}/items`)
    .then((response) => {
      if(!response.ok) {
        throw new Error('Token invalid');
      }
      return response.json();
    }); 
};