'use client';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import Weather from './components/Weather';

export default function Index() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
   

    async function fetchWeather(e) {
        e.preventDefault();
        setLoading(true); // Set loading to true before making the request
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`);
            setWeather(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
        setLoading(false); // Set loading to false after the request completes
        setCity(''); // Clear the input field after fetching weather data
    }
   
    return (
        <>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-10">
                <Image src="/weather.jpg" alt="Weather" layout="fill" className='object-cover'/>
                <div className="absolute inset-0 bg-opacity-50 bg-gray-900">
                </div>

                <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-20'>
                    <form  className='flex justify-between items-center w-full m-auto p-3 bg-transparent border text-white rounded-2xl' onSubmit={fetchWeather}> {/* Added onSubmit handler */}
                        <div>
                            <input className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder:' type="text" placeholder='Search city' value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <button  className='' type="submit"> {/* Changed to submit button */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path>
                            </svg>
                        </button>
                    </form>
                </div>
{weather.main && <Weather data={weather}/>}
               
            </div>
        </>
    );
}
