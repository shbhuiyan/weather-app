import { useState } from "react";
import "../Styles/background.css"
import axios from "axios";

const Home = () => {
    const [data , setData] = useState({})
    const [location , setLocation] = useState("")


    const apiKey = "c9a72e554d8b43b5d43da2c9f7bafd5c"

    // Weather API req fn
    const fetchWeather = () => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    }

    return (
        <section className="background">
            <div className="max-w-[600px] mx-auto px-3 pt-20 lg:pt-36">
                <div className=" border rounded-2xl shadow-xl backdrop-blur p-8">
                    <input type="text"
                    placeholder="Enter City Name"
                    className="py-3 px-6 w-full border rounded-xl focus:outline-none text-xl"
                    
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;