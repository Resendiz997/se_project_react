import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function AddItemModal({ title, btnText, closeActiveModal, isOpen,handleAddGarment }) {
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddGarment(formData);
  };

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", imageUrl: "", weather: "" });
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title={title}
      btnText={btnText}
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      handleSubmit={handleSubmit}
      handleAddGarment={handleAddGarment}
    >
          <label htmlFor="name" className="modal__label">
            Name{""}
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="imageURL" className="modal__label">
            Image{""}
            <input
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              type="text"
              className="modal__input"
              id="imageURL"
              placeholder="Image URL"
              required
            />
          </label>
          <fieldset className="modal__radio-btns">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                checked={formData.weather === "hot"}
                name="weather"
                value="hot"
                onChange={handleInputChange}
                id="hot"
                type="radio"
                className="modal__radio-input"
              />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                checked={formData.weather === "warm"}
                name="weather"
                value="warm"
                onChange={handleInputChange}
                id="warm"
                type="radio"
                className="modal__radio-input"
              />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                checked={formData.weather === "cold"}
                name="weather"
                id="cold"
                value="cold"
                onChange={handleInputChange}
                type="radio"
                className="modal__radio-input"
              />
              Cold
            </label>
          </fieldset>
          </ModalWithForm>
                 );
}

export default AddItemModal;
