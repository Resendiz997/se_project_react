import {Link} from 'react-router-dom';

import "./Header.css";
import Logo from "../../images/header-logo.svg";
import Avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({HandleAddClick , weatherData}){
    
        const currentDate = new Date().toLocaleString('default',
         { month: 'long', day: 'numeric'
         });


    return (
        <header className="header">
            <Link to='/'>
            <img src={Logo} alt="WTWR" className="header__logo"/>
            </Link>
            <p className="header__location">{currentDate}, {weatherData.city} </p>
            <ToggleSwitch />
            <button
            onClick={HandleAddClick} 
            type="button"
            className="header__add-clothes-btn"> + Add clothes</button>
            <Link to='/profile' className='header__link'>
            <div className="header__user-container">
                <p className="header__username">Username</p>
                <img src={Avatar} alt="Oscar Resendiz" className="header__avatar" />   
            </div>
            </Link> 
        </header>
    );
}

export default Header 