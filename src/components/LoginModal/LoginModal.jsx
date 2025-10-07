import { useState } from "react";
import "./LoginModal.css";
import { useNavigate } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ title, closeActiveModal, isOpen, btnText, handleLogin ,btnRedirect, setActiveModal,activeModal}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData).then(() => {
      navigate("/profile");
    });
  };

  return (
    <ModalWithForm
      title={title}
      btnText={btnText}
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      handleLogin={handleLogin}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      btnRedirect={btnRedirect}
      setActiveModal={setActiveModal}
      activeModal={activeModal}
    >
      <label className="modal__label">
        Email{""}
        <input  
          value={formData.email}
          type="text"
          name="email"
          className="modal__input"
          id="log-in-email"
          placeholder="Email"
          onChange={handleInputChange}
          required
        />
      </label>
      <label className="modal__label">
        Password{""}
        <input
          value={formData.password}
          type="password"
          name="password"
          className="modal__input"
          id="log-in-password"
          placeholder="Password"
          onChange={handleInputChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
