import React from 'react';
import clouds from "../../Assets/img/clouds.PNG"
import compassConverter from './CompasConverter';
import './Weatherdescription.css'
const WeatherDescription = ({windDegrees,windSpeed, radioWind, searchCity, city, radio, temp}) => {
    const FahrenheitConversion = (temp) => {
        return (temp * 1.8 + 32).toFixed();
      };
    
      const mphtokmsConversion = (speed) => {
        return (speed * 1.609344).toFixed();
      };
    
    return (
        <>
            <div className="card">
          <p>
            <strong>
              {searchCity ? `WEATHER IN: ${searchCity}` : `WEATHER IN: ${city}`}
            </strong>
          </p>

          <div className="content">
            <img src={clouds} width="70" height="60" alt="" />

            <div className="description">
              <p>{city}</p>
              <h3>
                {radio === "F" ? FahrenheitConversion(temp) : temp.toFixed()}
                &#176;
              </h3>
              <div>
                <p>
                  <strong>Wind</strong>
                </p>
                <p>
                  {radioWind === "on"
                    ? ` ${compassConverter(windDegrees)} ${mphtokmsConversion(
                        windSpeed
                      )} km/h`
                    : null}
                </p>
              </div>
            </div>
          </div>
        </div>   
        </>
    );
};

export default WeatherDescription;