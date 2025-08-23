import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import ErrorMessage from "./ErrorMessage";
import Forecast from "./Forecast";
import { processForecastData } from "../utils/processForecast";

export default function Homepage() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

const fetchWeather = async (city) => {
  try {
    setError("");
    setWeather(null);
    setForecast(null);

    // 🔎 Debug logs
    console.log("ENV KEY:", import.meta.env.VITE_OPENWEATHER_API_KEY);
    console.log("Weather URL:", import.meta.env.VITE_OPENWEATHER_API_URL);
    console.log("Forecast URL:", import.meta.env.VITE_OPENWEATHER_FORECAST_URL);

    const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const weatherUrl = import.meta.env.VITE_OPENWEATHER_API_URL;
    const forecastUrl = import.meta.env.VITE_OPENWEATHER_FORECAST_URL;

    // ✅ Fetch current weather
    const weatherRes = await fetch(
      `${weatherUrl}?q=${city}&appid=${key}&units=metric`
    );

    if (!weatherRes.ok) {
      throw new Error("City not recognized. Please try again.");
    }

    const weatherData = await weatherRes.json();
    setWeather(weatherData);

    // ✅ Fetch forecast
    const forecastRes = await fetch(
      `${forecastUrl}?q=${city}&appid=${key}&units=metric`
    );

    if (forecastRes.ok) {
      const forecastData = await forecastRes.json();
      const processed = processForecastData(forecastData.list);
      setForecast(processed);
    } else {
      throw new Error("Forecast could not be loaded.");
    }
  } catch (err) {
    setError(err.message);
  }
};

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl text-blue-500 mb-4 mt-20 shadow-md">Weather Dashboard</h1>
      <p>Search for the current weather in any city worldwide.</p>

      <SearchBar onSearch={fetchWeather} />

      <ErrorMessage message={error} />

      {weather && <WeatherCard weatherData={weather} />}
      {forecast && <Forecast forecastData={forecast} />}
    </div>
  );
}
