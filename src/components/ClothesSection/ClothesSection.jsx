import CurrentUserContext from "../../contexts/CurrentUserContext";
import React, { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
  
function ClothesSection({
  currentClothingItems,
  handleAddClick,
  handleCardLike,
  HandleCardClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  
  const userItems = currentClothingItems.filter(
    (items) =>  items.owner === currentUser?._id
  );

  return (
    <div className="clothing-section">
      <div className="clothing-section__header">
        <p className="clothing-section__title">Your Items</p>
        <button className="clothing-section__add" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothing-section__items">
        {userItems.map((items) => {
          return (
            <ItemCard
              HandleCardClick={HandleCardClick}
              currentUser={currentUser}
              handleCardLike={handleCardLike}
              // key={items._id}
              item={items}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
