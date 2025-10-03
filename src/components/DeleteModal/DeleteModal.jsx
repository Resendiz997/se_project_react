import "./DeleteModal.css";

function DeleteModal({ isOpen, onClick, handleRemoveClothingItem }) {
  return (
    <div className="delete__modal">
      <div className={`modal ${isOpen && "modal_opened"}`}>
        <div className="modal__content modal__content-delete">
          <button
            className="modal__close-btn modal__close-btn-delete"
            type="button"
            onClick={onClick}
          ></button>
          <p className="delete__modal-prompt">
            Are you sure you want to delete this item? This action is
            irreversable.
          </p>
          <button
            className="delete__modal-btn"
            type="button"
            onClick={handleRemoveClothingItem}
          >
            Yes, delete item
          </button>
          <button className="delete__modal-cancel-btn" onClick={onClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
