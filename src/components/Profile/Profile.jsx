import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

import './Profile.css';

function Profile ({clothingItems,weatherData,onCardClick}) {


    return (
    <div className='profile'>
        <section className="profile__sidebar">
            <SideBar/>
        </section>
        <section className="profile__clothes-item">
            <ClothesSection
            onCardClick= {onCardClick}
            clothingItems={clothingItems}
            weatherData={weatherData}
            />
        </section>

    </div>
    );
}


export default Profile; 