import React from "react";

const Weather = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <>
      <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
        <div className="relative flex justify-between pt-12">
          <div className="flex flex-col items-center">
            <img
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt="Weather Icon"
              width="100"
              height="100"
            />
            <p className="text-2xl">{weather[0].main}</p>
          </div>
          <p className="text-9xl"> {main.temp.toFixed(0)}&#176;</p>
        </div>

        <div className="bg-black/50 relative p-8 rounded-md mb-16">
          <p className="text-2xl text-center pb-6">Weather in {name}</p>
          <div className="flex justify-between text-center">
            <div>
              <p className="font-bold text-2xl">{main.feels_like.toFixed(0)}&#176;</p>
              <p className="text-xl">Feels Like</p>
            </div>
            <div>
              <p className="font-bold text-2xl">{main.humidity}%</p>
              <p className="text-xl">Humidity</p>
            </div>
            <div>
              <p className="font-bold text-2xl">{wind.speed.toFixed(0)} mph</p>
              <p className="text-xl">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
