import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import {
  ApiKey,
  coordinates,
} from "../../utils/constants";

import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnit/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, postItems, deleteItems } from "../../utils/Api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: {},
    city: "",
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const HandleAddClick = () => {
    setActiveModal("Add garment");
  };

  const HandleDeleteClick =(_id) =>{
    console.log(_id);
    deleteItems(_id);
    setClothingItems(clothingItems.filter((item) => {
      return item._id !== _id; 
    })
  )
  closeActiveModal();
 };

  const HandleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleClothingItemSubmit = ({ name, imageUrl, weather }) => {
    setClothingItems((prevItem) => [...prevItem, { name, imageUrl, weather }]);
    postItems({ name, imageUrl, weather });
    closeActiveModal();
  };

  useEffect(() => {
    getWeather(coordinates, ApiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
 
    getItems().then((data) => {
      setClothingItems(data);
    })
    .catch((error) => {
    });
  }, []);


  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header HandleAddClick={HandleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={HandleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={HandleCardClick}
                  weatherData={weatherData}
                />
              }
            />
          </Routes>
        </div>
        <AddItemModal
          onClothingItemSubmit={handleClothingItemSubmit}
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          clothingItems={clothingItems}
        />
        <ItemModal
          selectedCard={selectedCard}
          activeModal={activeModal}
          onClick={closeActiveModal}
          onDeleteClick={HandleDeleteClick}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
