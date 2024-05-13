// Weather.js
import React from 'react';

const Weather = ({ data }) => {
    const { name, main, weather } = data;
    
    return (
        <div className="text-white">
            <h2 className="text-3xl font-semibold">{name}</h2>
            <div className="flex items-center justify-center">
                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather[0].description} className="mr-2 w-12 h-12" />
                <span className="text-2xl">{Math.round(main.temp - 273.15)}°C</span>
            </div>
            <p className="mt-4">{weather[0].description}</p>
            <div className="flex justify-between mt-4">
                <div>
                    <p className="font-semibold">Feels Like</p>
                    <p>{Math.round(main.feels_like - 273.15)}°C</p>
                </div>
                <div>
                    <p className="font-semibold">Humidity</p>
                    <p>{main.humidity}%</p>
                </div>
                <div>
                    <p className="font-semibold">Wind</p>
                    <p>{Math.round(data.wind.speed * 3.6)} km/h</p>
                </div>
            </div>
        </div>
    );
};

export default Weather;
