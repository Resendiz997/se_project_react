import React, { useState, useContext, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./EditProfileModal.css";

function EditProfileModal({
  isOpen,
  closeActiveModal,
  onUpdateUser,
  title,
  btnText,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (currentUser && isOpen) {
      setFormData({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [currentUser, isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formData);
  };

  return (
    <ModalWithForm
    title={title}
    btnText={btnText}
    isOpen={isOpen}
    closeActiveModal={closeActiveModal}
    handleSubmit={handleSubmit}
    handleInputChange={handleInputChange}
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
              name="avatar"
              value={formData.avatar}
              onChange={handleInputChange}
              type="text"
              className="modal__input"
              id="imageURL"
              placeholder="Image URL"
              required
            />
            </label>
  </ModalWithForm>
  )
}

export default EditProfileModal;
