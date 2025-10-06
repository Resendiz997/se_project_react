const BASE_URL = "http://localhost:3001";

const getToken = () => {
  return localStorage.getItem("jwt");
};


export function checkResponse(res){
  if (res.ok) {
    return res.json();
}
return Promise.reject(`Error ${res.status}`);
};

export const addClothingItem = (item) => {
  const token = getToken();

  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  }).then(checkResponse)
};

export const deleteClothingItem = (itemId) => {
  const token = getToken();

  return fetch(`${BASE_URL}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse)
};

export const getProfileInfo = () => {
  const token = getToken();

  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse)
};

export const addCardLike = (itemId) => {
  const token = getToken();

  return fetch(`${BASE_URL}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse)
};


export const removeCardLike = (itemId) => {
  const token = getToken();
  return fetch(`${BASE_URL}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse)
};

export const updateProfile = (item) => {
  const token = getToken();
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  }).then(checkResponse)
};

export const getClothingItems = () => {
  return fetch(`${BASE_URL}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse)
};
