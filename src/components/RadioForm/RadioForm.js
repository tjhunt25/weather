import React from 'react';
import './RadioForm.css'
const RadioForm = ({setRadioWind, radioWind}) => {
    return (
        <>
          <form>
            <p>Wind</p>
            <div className="windRadioWrapper">
              <div>
                <label>On</label>
                <input
                  type="radio"
                  checked={radioWind === "on"}
                  value="on"
                  onChange={(e) => {
                    setRadioWind(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Off</label>
                <input
                  type="radio"
                  checked={radioWind === "off"}
                  value="off"
                  onChange={(e) => {
                    setRadioWind(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>  
        </>
    );
};

export default RadioForm;