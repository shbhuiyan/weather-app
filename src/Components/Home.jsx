import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Home = () => {

    // const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
    return (
        <div className='w-full h-lvh border bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 px-4'>
            <div className="max-w-[600px] mx-auto my-40">
                <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-700">
                    <div className="flex">
                    <input className='py-2 px-6 w-2/3 bg-white rounded-l-full focus:outline-none text-xl' type="text" placeholder='Enter city Name' />
                    <button className='flex items-center gap-3 py-2 px-6 w-1/3 bg-indigo-400 rounded-r-full text-xl'>Search <FaSearch /></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;