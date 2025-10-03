import { Link } from "react-router-dom";

import "./Header.css";
import Logo from "../../images/header-logo.svg";
import Avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleAddClick,
  weatherData,
  handleSignUpClick,
  handleSignInClick,
  currentUser,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
                src={Avatar}
                alt="Oscar Resendiz"
                className="header__avatar"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="login__header">
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
