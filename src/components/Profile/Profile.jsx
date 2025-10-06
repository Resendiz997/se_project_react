import "./Profile.css";
import { useContext } from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({
  weatherData,
  HandleCardClick,
  handleAddClick,
  handleEditProfileClick,
  handleSignOut,
  currentClothingItems,
  handleCardLike,
}) {
  
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <SideBar
        currentUser={currentUser}
        handleEditProfileClick={handleEditProfileClick}
        handleSignOut={handleSignOut}
      />
      <section className="profile__clothes-section-">
        <ClothesSection
          handleCardLike={handleCardLike}
          currentClothingItems={currentClothingItems}
          handleAddClick={handleAddClick}
          weatherData={weatherData}
          HandleCardClick={HandleCardClick}
        />
      </section>
    </div>
  );
}

export default Profile;
