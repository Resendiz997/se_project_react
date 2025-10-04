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
    (item) => item.owner === currentUser._id
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
        {userItems.map((item) => {
          return (
            <ItemCard
              HandleCardClick={HandleCardClick}
              currentUser={currentUser}
              handleCardLike={handleCardLike}
              key={item._id}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
