import { useState } from "react";
import "./RegisterModal.css";

function RegisterModal({ title, closeActiveModal, isOpen, btnText, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
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
          <label htmlFor="email" className="modal__label">
            Email
            <input
              type="email"
              className="modal__input"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="password" className="modal__label">
            Password
            <input
              type="password"
              className="modal__input"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="name" className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="avatar" className="modal__label">
            Avatar URL
            <input
              type="url"
              className="modal__input"
              name="avatar"
              placeholder="Avatar URL"
              value={formData.avatar}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit" className="modal__submit-btn">
            {" "}
            {btnText}{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
