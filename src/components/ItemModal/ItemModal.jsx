import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemModal({ activeModal, selectedCard, onClick, handleDeleteClick }) {
  const currentUser = useContext(CurrentUserContext);
  

  const isOwn = selectedCard.owner === currentUser?._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClick}
          type="button"
          className="modal__close-btn modal__close-btn_item"
        ></button>
        <img
          src={selectedCard.imageUrl}
          alt="selected-card"
          className="modal__image"
        />
        <div className="modal__footer">
          {isOwn && (
            <button
              className="modal__delete-btn"
              onClick={() => handleDeleteClick(selectedCard)}
            >
              Delete Item
            </button>
          )}
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather">weather : {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
