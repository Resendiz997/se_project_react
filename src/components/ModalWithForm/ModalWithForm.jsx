import "./ModalWithForm.css";

function ModalWithForm ({children, title, btnText, closeActiveModal, isOpen, onSubmit}){
 return(
    <div className={`modal ${isOpen && 'modal_opened'}`}>
        <div className="modal__content">
        <h2 className="modal__title">
            {title}
        </h2>
        <button 
        onClick={closeActiveModal}
        type="buttotn" 
        className="modal__close-btn"
        >
        </button>
        <form  onSubmit={onSubmit} className="modal__form">
            {children}
            <button type="submit" className="modal__submit-btn">{btnText}</button>
            </form>
        </div>
    </div>
 )   
}

export default ModalWithForm; 