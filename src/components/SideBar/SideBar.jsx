import "./SideBar.css";
import { useNavigate } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";


function SideBar({ handleEditProfileClick, handleSignOut }) {
  const navigate = useNavigate();

  const submitSignOut = (e) => {
    e.preventDefault();
    handleSignOut();
      navigate("/");
  };

  const currentUser = useContext(CurrentUserContext);


  return (
    <aside className="sidebar">
      <section className="profile__sidebar">
        <div className="profile__sidebar-user">
          <img
            src={currentUser.avatar}
            alt="Oscar Resendiz"
            className="profile__sidebar-avatar"
          />
          <p className="profile__sidebar-name">{currentUser.name}</p>
        </div>
        <section className="profile__sidebar-btns">
          <button
            className="profile__sidebar-edit"
            onClick={handleEditProfileClick}
          >
            Change profile data
          </button>
          <button className="profile__sidebar-log-out" onClick={submitSignOut}>
            Log out
          </button>
        </section>
      </section>
    </aside>
  );
}

export default SideBar;
