import React from 'react';
import './ModalWithForm.css';

function  ModalWithForm({ 
  children,        // The form inputs (different for each modal)
  btnText,      // "Sign Up", "Log In", "Add Item", etc.
  title,          // "Sign Up", "Log In", "Add New Item", etc.
  isOpen,         // Controls if modal is visible
  closeActiveModal,        // Function to close modal
  handleSubmit ,
  handleInputChange ,
  btnRedirect,
  setActiveModal,
  activeModal   // Function to handle form submission
}) {
  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        
        <button 
          className="modal__close-btn" 
          type="button"
          onClick={closeActiveModal}
        >
        </button>
        <form className="modal__form" 
        onSubmit={handleSubmit}
        onChange={handleInputChange}>
          {children}
        <div className="modal__buttons">
          <button 
            type="submit" 
            className="modal__submit-btn"
          >
            {btnText}
          </button>
          <button className="modal__submit-btn-redirect"
          type='button'
          onClick={() => {
            if (activeModal === "Sign in") {
              setActiveModal("Sign up");
            } else {
              setActiveModal("Sign in");
            }
          }}
          >
          {btnRedirect}
          </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;