import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../CurrentTemperatureUnit/CurrentTemperatureUnitContext";


function ToggleSwitch(){
   
   
    const {handleToggleSwitchChange, currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
    
    return (
        <label className="toggle-switch">
            <input onChange={handleToggleSwitchChange} type="checkbox" className="toggle-switch__checkbox" />
            <span className="toggle-switch__slider"></span>
            <span className={`toggle-switch__letter toggle-switch__letter_F ${currentTemperatureUnit === 'F' ? "toggle-switch__letter_color_white" :''}`} >F</span>
            <span className={`toggle-switch__letter toggle-switch__letter_C ${currentTemperatureUnit === 'C' ? "toggle-switch__letter_color_white" : ''}`}>C</span>
        </label>
    );
}

export default ToggleSwitch;