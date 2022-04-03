import axios from "axios";
import { useState, useEffect } from "react";
import Body from "./Body";
import Header from "./Header";

function Container() {
  const userId = "d7631044ba4bf4bb3aa5844cecf97978";
  const [city, setCity] = useState("Ankara");
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    (async () => {
      const { data: cityInput } = await axios(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${userId}`
      );
      let lat = await cityInput[0].lat;
      let lon = await cityInput[0].lon;
      const { data: weather } = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${userId}`
      );
      setForecast(weather.daily);
      console.log(weather.daily);
    })();
  }, [city]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.firstChild.value);
    let val = e.target.firstChild.value;
    setCity(val);
  };

  return (
    <div>
      <Header city={city} setCity={setCity} />
      <Body forecast={forecast} />
    </div>
  );
}

export default Container;
