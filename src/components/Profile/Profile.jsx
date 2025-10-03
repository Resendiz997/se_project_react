import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({
  currentUser,
  weatherData,
  HandleCardClick,
  handleAddClick,
  handleEditProfileClick,
  handleSignOut,
  currentClothingItems,
  handleCardLike,
}) {
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
