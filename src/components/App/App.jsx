import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EDITpROFILEmoDAL.JSX";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { ApiKey, coordinates } from "../../utils/constants";
import { register, authorize, checkToken } from "../../utils/auth";
import {
  updateProfile,
  removeCardLike,
  addCardLike,
  addClothingItem,
  getClothingItems,
  deleteClothingItem,
} from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: {},
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentClothingItems, setCurrentClothingItems] = useState([]);
  const [cardToDelete, setCardToDelete] = useState({});

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleRegistration = (formData) => {
    const { name, email, password, avatar } = formData;

    register({ name, email, password, avatar })
      .then((data) => {
        closeActiveModal();
        setStayLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
        alert("Registration failed. Please try again.");
      });
  };

  const handleLogin = (formData) => {
    const { email, password } = formData;

    return authorize({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        checkToken(data.token).then((userData) => {
          setStayLoggedIn(true);
          setCurrentUser(userData);
          closeActiveModal();
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Log in failed. Please try again.");
      });
  };

  const handleAddClick = () => {
    setActiveModal("Add garment");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const handleUpdateUser = (userData) => {
    updateProfile(userData)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Failed to update profile");
      });
  };

  const handleAddGarment = (formData) => {
    const { name, imageUrl, weather } = formData;
    const newItem = { name, imageUrl, weather };
    addClothingItem(newItem).then((newItem) => {
      setCurrentClothingItems([...currentClothingItems, newItem]);
      closeActiveModal();
    })
    .catch((error) => {
      console.error("Failed to add garment");
    })
};

  const handleRemoveClothingItem = () => {
    deleteClothingItem(cardToDelete._id)
      .then(() => {
        setCurrentClothingItems((cards) => {
          return cards.filter((card) => card._id !== cardToDelete._id);
        });
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = ({ itemId, isLiked }) => {
    !isLiked
      ? addCardLike(itemId)
          .then((updatedCard) => {
            setCurrentClothingItems((cards) =>
              cards.map((item) => (item._id === itemId ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(itemId)
          .then((updatedCard) => {
            setCurrentClothingItems((cards) =>
              cards.map((item) => (item._id === itemId ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleDeleteClick = (card) => {
    setActiveModal("delete");
    setCardToDelete(card);
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setStayLoggedIn(false);
    setCurrentUser(null);
  };

  const handleSignInClick = () => {
    setActiveModal("Sign in");
  };

  const handleSignUpClick = () => {
    setActiveModal("Sign up");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // on page load, fetch to get the weather info, and store it in the weatherData state
  useEffect(() => {
    getWeather(coordinates, ApiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  // on page load, we check if the token exists in localStorage
  // if it exists, we make a request to auto log the user in (using that token)
  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      checkToken(token)
        .then((userData) => {
          setStayLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch((error) => {
          console.error("Token invalid:", error);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  // once on page load (a useEffect in App.jsx with an empty dependency array), make a fetch to get all clothing items
  // then, store all those clothing items in the currentClothingItems state variable
  useEffect(() => {
    getClothingItems()
      .then((data) => {
        setCurrentClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Router>
          <div className="page">
            <div className="page__content">
              <Header
                handleSignInClick={handleSignInClick}
                handleAddClick={handleAddClick}
                handleSignUpClick={handleSignUpClick}
                weatherData={weatherData}
                currentUser={currentUser}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weatherData={weatherData}
                      HandleCardClick={handleCardClick}
                      currentClothingItems={currentClothingItems}
                      handleCardLike={handleCardLike}
                      currentUser={currentUser}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute isLoggedIn={stayLoggedIn}>
                      <Profile
                        HandleCardClick={handleCardClick}
                        currentClothingItems={currentClothingItems}
                        handleCardLike={handleCardLike}
                        currentUser={currentUser}
                        weatherData={weatherData}
                        handleEditProfileClick={handleEditProfileClick}
                        handleAddClick={handleAddClick}
                        handleSignOut={handleSignOut}
                      />
                      <EditProfileModal
                        title="Change profile data"
                        btnText="Save changes"
                        isOpen={activeModal === "edit-profile"}
                        closeActiveModal={closeActiveModal}
                        onUpdateUser={handleUpdateUser}
                      />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
            <LoginModal
              title="Log in"
              btnText="Log in"
              activeModal={activeModal}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "Sign in"}
              handleLogin={handleLogin}
            >
              <label htmlFor="email" className="modal__label">
                Email{""}
                <input
                  type="text"
                  name="email"
                  className="modal__input"
                  id="log-in-email"
                  placeholder="Email"
                  required
                />
              </label>
              <label htmlFor="password" className="modal__label">
                Password{""}
                <input
                  type="password"
                  name="password"
                  className="modal__input"
                  id="log-in-password"
                  placeholder="Password"
                  required
                />
              </label>
            </LoginModal>
            <RegisterModal
              title="Sign up"
              btnText="Next"
              activeModal={activeModal}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "Sign up"}
              onSubmit={handleRegistration}
            >
              <label htmlFor="email" className="modal__label">
                Email{""}
                <input
                  type="text"
                  className="modal__input"
                  id="email"
                  placeholder="Email"
                  required
                />
              </label>
              <label htmlFor="password" className="modal__label">
                Password{""}
                <input
                  type="password"
                  className="modal__input"
                  id="password"
                  placeholder="Password"
                  required
                />
              </label>
              <label htmlFor="name" className="modal__label">
                Name{""}
                <input
                  type="text"
                  className="modal__input"
                  id="register name"
                  placeholder="Name"
                  required
                />
              </label>
              <label htmlFor="avatarURL" className="modal__label">
                Avatar URL{""}
                <input
                  type="text"
                  className="modal__input"
                  id="avatarURL"
                  placeholder="Avatar URL"
                  required
                />
              </label>
            </RegisterModal>
            <AddItemModal
              title="New Garment"
              btnText="Add garment"
              activeModal={activeModal}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "Add garment"}
              onSubmit={handleAddGarment}
              />
            <ItemModal
              selectedCard={selectedCard}
              activeModal={activeModal}
              onClick={closeActiveModal}
              handleRemoveClothingItem={handleRemoveClothingItem}
              handleDeleteClick={handleDeleteClick}
            />
            <DeleteModal
              isOpen={activeModal === "delete"}
              onClick={closeActiveModal}
              closeActiveModal={closeActiveModal}
              handleRemoveClothingItem={handleRemoveClothingItem}
            />
            <Footer />
          </div>
        </Router>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
