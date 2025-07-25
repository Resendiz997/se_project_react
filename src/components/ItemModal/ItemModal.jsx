import "./ItemModal.css";

function ItemModal({ activeModal, selectedCard,onClick ,onDeleteClick}) {
  return (
    <div className={`modal ${activeModal === 'preview' && 'modal_opened'}`}>
        <div className="modal__content modal__content_type_image">
      <button
        onClick={onClick}
        type="button"
        className="modal__close-btn modal__close-btn_item"
      ></button>
      <img src={selectedCard.imageUrl} alt="selected-card" className="modal__image" />
      <div className="modal__footer">
        <h2 className="modal__caption">
            {selectedCard.name}
        </h2>
        <button
         onClick={()=>{onDeleteClick(selectedCard.id)}}
         type="button"
         className="modal__delete-btn">Delete Item</button>
        <p className="modal__weather">
            weather : {selectedCard.weather}    
        </p>
      </div>
    </div>
</div>
  );
}

export default ItemModal;
