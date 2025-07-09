import { useEffect, useState } from 'react';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Footer from '../Footer/footer';
import ItemModal from '../ItemModal/ItemModal';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import { ApiKey, coordinates } from '../../utils/constants';


function App() {
  
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: {} ,
    city : "",  
  }); 

  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = useState({});

  const HandleAddClick = ()=>{
    setActiveModal("Add garment");
  };

  const HandleCardClick= (card) =>{
    setActiveModal("preview");
    setSelectedCard(card);
  }

  const closeActiveModal = () =>{
    setActiveModal("");
  };

  useEffect (()=>{
    getWeather(coordinates , ApiKey)
    .then((data) => {
      const filteredData = filterWeatherData(data)
      setWeatherData(filteredData);
    })
    .catch(console.error);
  },[]) ;


  return (
    <div className="page">
     <div className="page__content">
      <Header HandleAddClick={HandleAddClick} weatherData={weatherData}/>
      < Main weatherData={weatherData} HandleCardClick={HandleCardClick}/>
      </div>
      <ModalWithForm 
       title="New Garment"
       btnText="Add garment" 
       activeModal={activeModal}
       closeActiveModal={closeActiveModal}
       >

      <label htmlFor="name" className="modal__label">
                Name{""}
                <input 
                type="text"
                className="modal__input"
                id="name"
                placeholder="Name"/>
                </label>
            <label htmlFor="imageURL" className="modal__label">
                Image{""}
                <input 
                type="text"
                className="modal__input"
                id="imageURL"
                placeholder="Image URL"/>
            </label>
            <fieldset className="modal__radio-btns"> 
                <legend className="modal__legend">Select the weather type:</legend>
                <label htmlFor="hot" className="modal__label modal__label_type_radio">
                    <input 
                    id="hot"
                    type="radio" 
                    className="modal__radio-input"/>Hot
                    </label>
                <label htmlFor="warm" className="modal__label modal__label_type_radio">
                    <input 
                    id="warm"
                    type="radio" 
                    className="modal__radio-input"/>Warm
                    </label>
                <label htmlFor="cold" className="modal__label modal__label_type_radio">
                    <input 
                    id="cold"
                    type="radio" 
                    className="modal__radio-input"/>Cold
                    </label>
                </fieldset>
      </ModalWithForm> 
      <ItemModal
       selectedCard={selectedCard} 
       activeModal={activeModal} 
       onClick={closeActiveModal}/>
       <Footer/> 
     </div>
     )
}

export default App
