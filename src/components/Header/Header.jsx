import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import Logo from "../../images/header-logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";




function Header({
  handleAddClick,
  weatherData,
  handleSignUpClick,
  handleSignInClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="WTWR" className="header__logo" />
      </Link>
      <p className="header__location">
        {currentDate}, {weatherData.city}
      </p>
      {currentUser ? (
        <div className="profile__header">
          <ToggleSwitch />
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            {" "}
            + Add clothes
          </button>
          <div className="header__user-container">
            <p className="header__username">{currentUser.name}</p>
            <Link to="/profile">
              <img
                src={currentUser.avatar}
                alt="Oscar Resendiz"
                className="header__avatar"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="login__header">
          <ToggleSwitch />
          <button
            onClick={handleSignInClick}
            className="header__menu-btn"
            type="button"
          >
            sign in{" "}
          </button>
          <button
            onClick={handleSignUpClick}
            className="header__menu-btn"
            type="button"
          >
            sign up{" "}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
