import { useState } from "react";
import "./LoginModal.css";
import { useNavigate } from "react-router-dom";

function LoginModal({
  children,
  title,
  closeActiveModal,
  isOpen,
  btnText,
  handleLogin,
}) {
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
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn"
        ></button>
        <form
          className="modal__form"
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        >
          {children}
          <button type="submit" className="modal__submit-btn">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
