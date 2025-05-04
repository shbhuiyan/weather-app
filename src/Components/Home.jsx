import { useState } from "react";
import "../Styles/background.css"
import axios from "axios";

const Home = () => {
    const [data , setData] = useState({})
    const [location , setLocation] = useState("")
    const [loading , setLoading] = useState(false)

    const apiKey = "c9a72e554d8b43b5d43da2c9f7bafd5c"

    // Weather API req fn
    const fetchWeather = (cityName) => {
        if(!cityName){
            return
        }
        setLoading(true)

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
    };

    //After Enter Keyup then call this fn
    const searchLocation = e => {
        if(e.key === "Enter"){
            fetchWeather(location)
            setLocation("")
        }
    };
 
    return (
        <section className="background">
            <div className="max-w-[600px] mx-auto px-3 pt-20 lg:pt-36">
                <div className=" border rounded-2xl shadow-xl backdrop-blur p-8">
                    <input type="text"
                    placeholder="Enter City Name"
                    className="py-3 px-6 w-full border rounded-xl focus:outline-none text-xl"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    onKeyUp={searchLocation}
                    />
                </div>

            {/* Loading State */}
                {
                    loading && (
                        <div className="flex justify-center mt-6">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-50"></div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Home;