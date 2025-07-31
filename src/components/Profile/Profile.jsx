import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

import './Profile.css';

function Profile ({clothingItems,onCardClick,onAddClick}) {


    return (
    <div className='profile'>
        <section className="profile__sidebar">
            <SideBar/>
        </section>
        <section className="profile__clothes-item">
            <ClothesSection
            onAddClick={onAddClick}
            onCardClick= {onCardClick}
            clothingItems={clothingItems}
            />
        </section>

    </div>
    );
}


export default Profile; 