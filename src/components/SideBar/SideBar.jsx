import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import Avatar from "../../images/avatar.svg";

function SideBar({ currentUser, handleEditProfileClick, handleSignOut }) {
  const navigate = useNavigate();

  const submitSignOut = (e) => {
    e.preventDefault();
    handleSignOut();
      navigate("/");
  };

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
