import React from "react";
import "./SearchCityForm.css";
const SearchCityForm = ({ setRadio, setSearchCity, searchCity, radio }) => {
  return (
    <>
      <form>
        <div>
          <p>{searchCity ? `City: ${searchCity}` : `City:`}</p>

          <input
            type="text"
            placeholder="Search For A City"
            onChange={(e) => {
              setSearchCity(e.target.value);
            }}
          />
        </div>

        <div className="tempflex">
          <p>Temperature</p>
          <div className="tempRadioWrapper">
            <div>
              <label>&#176;C</label>
              <input
                type="radio"
                checked={radio === "c"}
                value="c"
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
              />
            </div>

            <div>
              <label>&#176;F</label>
              <input
                type="radio"
                checked={radio === "F"}
                value="F"
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchCityForm;
