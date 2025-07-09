import "./ModalWithForm.css";

function ModalWithForm ({children, title, btnText, activeModal, closeActiveModal}){
 return(
    <div className={`modal ${activeModal === 'Add garment' && 'modal_opened'}`}>
        <div className="modal__content">
        <h2 className="modal__title">
            {title}
        </h2>
        <button 
        onClick={closeActiveModal}
        type="buttotn" 
        className="modal__close-btn">
        </button>
        <form className="modal__form">
            {children}
            </form>
            <button type="submit" className="modal__submit-btn">{btnText}</button>
        </div>
    </div>
 )   
}

export default ModalWithForm; 