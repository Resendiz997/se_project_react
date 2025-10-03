import React from 'react';
import './ModalWithForm.css';

function ModalWithForm({ 
  children,        // The form inputs (different for each modal)
  buttonText,      // "Sign Up", "Log In", "Add Item", etc.
  title,          // "Sign Up", "Log In", "Add New Item", etc.
  isOpen,         // Controls if modal is visible
  onClose,        // Function to close modal
  onSubmit        // Function to handle form submission
}) {
  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        
        <button 
          className="modal__close" 
          type="button"
          onClick={onClose}
        >
          ×
        </button>
        
        <form className="modal__form" onSubmit={onSubmit}>
          {children} {/* This is where specific inputs go */}
          
          <button 
            type="submit" 
            className="modal__submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;