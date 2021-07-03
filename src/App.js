import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import SearchCityForm from "./components/SearchCityForm/SearchCityForm";
import RadioForm from "./components/RadioForm/RadioForm";
import WeatherDescription from "./components/WeatherDescription/WeatherDescription";
function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [radio, setRadio] = useState("c");
  const [radioWind, setRadioWind] = useState("on");
  const [windSpeed, setWindSpeed] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [windDegrees, setWindDegrees] = useState("");

  // https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const api = "cd9afadcc4f4963a88c7093b645d8140";
  const urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric`;
  const searchURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${api}&units=metric`;
  const useURL = searchCity ? searchURL : urlLocation;
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await navigator.geolocation.getCurrentPosition(savePositionToState);
        const res = await axios.get(useURL);

        setTemp(res.data.main.temp);
        setCity(res.data.name);
        setWindDegrees(res.data.wind.deg);
        setWindSpeed(res.data.wind.speed);
        console.log(res)
      } catch (err) {
        console.error(err);
      }
    };
    fetchWeather();
    // eslint-disable-next-line
  }, [searchCity, latitude, longitude]);

  return (
    <div className="wrapper">
      <div className="searchConversionWrapper">
        {/* weather conversion and search for city */}
        <SearchCityForm
          setRadio={setRadio}
          setSearchCity={setSearchCity}
          searchCity={searchCity}
          radio={radio}
        />
        <RadioForm setRadioWind={setRadioWind} radioWind={radioWind} />
      </div>
      {/*Weather Card  */}
      <WeatherDescription
        windDegrees={windDegrees}
        windSpeed={windSpeed}
        radioWind={radioWind}
        searchCity={searchCity}
        city={city}
        radio={radio}
        temp={temp}
      />
    </div>
  );
}

export default App;
