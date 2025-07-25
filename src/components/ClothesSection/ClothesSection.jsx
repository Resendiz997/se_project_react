import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({clothingItems,weatherData,onCardClick}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your Items</p>
        <button className="clothes-section__add_button">+ Add Item</button>
      </div>
      <ul className="clothes-section__list">
          {clothingItems
          .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item,_id) => {
              return (
                <ItemCard
                  key={_id}
                  item={item}
                  onCardClick={onCardClick}
                />
              )
            })}
        </ul>
    </div>
  );
}

export default ClothesSection;
