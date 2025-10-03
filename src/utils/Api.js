const BASE_URL = "http://localhost:3001";

const getToken = () => {
  return localStorage.getItem("jwt");
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
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to add item");
    }
    return response.json();
  });
};

export const deleteClothingItem = (itemId) => {
  const token = getToken();

  return fetch(`${BASE_URL}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete item");
    }
    return response.json();
  });
};

export const getProfileInfo = () => {
  const token = getToken();

  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to get profile");
    }
    return response.json();
  });
};

export const addCardLike = (itemId) => {
  const token = getToken();

  return fetch(`${BASE_URL}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to get like or unlike an item");
    }
    return response.json();
  });
};


export const removeCardLike = (itemId) => {
  const token = getToken();
  return fetch(`${BASE_URL}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to get like or unlike an item");
    }
    return response.json();
  });
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
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update profile");
    }
    return response.json();
  });
};

export const getClothingItems = () => {
  return fetch(`${BASE_URL}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to get item");
    }
    return response.json();
  });
};
