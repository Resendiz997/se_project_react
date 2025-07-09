import "./Header.css";
import Logo from "../../images/header-logo.svg";
import Avatar from "../../images/avatar.svg";

function Header({HandleAddClick , weatherData}){
    const currentDate = new Date().toLocaleString('default',
         { month: 'long', day: 'numeric'
         });


    return (
        <header className="header">
            <img src={Logo} alt="" className="header__logo"/>
            <p className="header__location">{currentDate}, {weatherData.city}</p>
            <button
            onClick={HandleAddClick} 
            type="button"
            className="header__add-clothes-btn"> + Add clothes</button>
            <div className="header__user-container">
                <p className="header__username">Username</p>
                <img src={Avatar} alt="Oscar Resendiz" className="header__avatar" />    
            </div>
        </header>
    );
}

export default Header 