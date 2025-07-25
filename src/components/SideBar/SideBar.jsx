import './SideBar.css';
import avatar from '../../images/avatar.svg';


function SideBar (){


return (
    <div className='sidebar'>
         <img src={avatar} alt="profile-avatar" className="sidebar__avatar" />
         <p className="sidebar__username">Username</p>
    </div>
    );
};

export default SideBar;