import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTempatureUnitContext from "../../contexts/currentTempatureUnit.jsx";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTempatureUnit } = useContext(
    CurrentTempatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circle"></span>
      <span
        className={`toggle-switch__text toggle-switch__text_F ${
          currentTempatureUnit === "F" ? "toggle-switch__text_color_white" : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_C ${
          currentTempatureUnit === "C" ? "toggle-switch__text_color_white" : ""
        }`}
      >
        C
      </span>
    </label>
  );
}
