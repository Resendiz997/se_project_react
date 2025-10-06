import { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ title, closeActiveModal, isOpen, btnText, handleRegistration, btnRedirect, setActiveModal ,activeModal}) {
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
    handleRegistration(formData);
  };

  return (
    <ModalWithForm
      setActiveModal ={setActiveModal}
      title={title}
      btnText={btnText}
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      btnRedirect={btnRedirect}
      activeModal={activeModal}
    >
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
          </ModalWithForm>
          )
        }


export default RegisterModal;
