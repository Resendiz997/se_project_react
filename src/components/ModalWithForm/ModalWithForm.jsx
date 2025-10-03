import "./ModalWithForm.css";
import { useState, useEffect } from "react";

function ModalWithForm({ title, btnText, closeActiveModal, isOpen, onSubmit }) {
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
    onSubmit(formData);
  };

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", imageUrl: "", weather: "" });
    }
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn"
        ></button>
        <form className="modal__form" onSubmit={handleSubmit}>
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
          <button type="submit" className="modal__submit-btn">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
