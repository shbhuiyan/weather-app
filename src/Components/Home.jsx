import { useEffect, useState } from "react";
import "../Styles/background.css"
import axios from "axios";

const Home = () => {
    const [data , setData] = useState({})
    const [location , setLocation] = useState("")
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")
    const [history , setHistory] = useState([])

    const apiKey = "c9a72e554d8b43b5d43da2c9f7bafd5c"

    // Weather API req fn
    const fetchWeather = (cityName) => {
        if(!cityName){
            return
        }
        setLoading(true)
        setError("")

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(res => {
            setData(res.data)
            localStorage.setItem('lastCity', cityName);

            // Update search history in localStorage
            const prevHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
            const newHistory = [cityName, ...prevHistory.filter(city => city !== cityName)].slice(0, 5);
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
            setHistory(newHistory);

            setLoading(false)
        })
        .catch(()=> {
            setError("⚠️ City not found. Please try again.")
            setData({})
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

    useEffect(() => {
        const savedCity = localStorage.getItem('lastCity');
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

        if (savedCity) {
          fetchWeather(savedCity);
        }

        setHistory(savedHistory);
      }, []);

 
    return (
        <section className="background">
            <div className="max-w-[600px] mx-auto px-3 pt-20 lg:pt-36">

                <h1 className="text-center text-4xl mb-10 text-yellow-400">Check Your City's Weather</h1>

            {/* Search Box */}
                <div className=" border rounded-2xl shadow-xl backdrop-blur p-8">
                    <input type="text"
                    placeholder="Enter City Name"
                    className="py-3 px-6 w-full border rounded-xl focus:outline-none text-xl"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    onKeyUp={searchLocation}
                    />

                {/* weather information box */}
                    {
                        !loading && data.main && (
                            <div className="m-10">
                                <h2 className="text-3xl text-center font-bold mb-2">{data.name}, {data.sys.country}</h2>
                                <div className="flex items-center justify-between mt-14">
                                    <img
                                      src={`/icons/${data.weather[0].icon}.png`}
                                      alt={data.weather[0].description}
                                      className="w-32 h-32 drop-shadow-md"
                                    />
                                    <div className="">
                                    <p className='text-xl mb-1'>🌡 Temperature: {(data.main.temp - 273.15).toFixed(1)}°C</p>
                                    <p className='text-lg capitalize mb-1'>☁ Condition: {data.weather[0].description}</p>
                                    <p className='text-md'>💨 Wind Speed: {data.wind.speed} m/s</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            {/* Error Handling */}
                {
                    error && (
                    <div className="text-red-300 text-2xl font-bold text-center mt-4">{error}</div>
                    )
                }

            {/* Loading State */}
                {
                    loading && (
                        <div className="flex justify-center mt-6">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-50"></div>
                        </div>
                    )
                }

            {/* Show Last 5 Search City's History */}
                {
                    history.length > 0 && (
                        <div className="mt-6 backdrop-blur p-4 rounded-xl shadow-md">
                          <h3 className="text-lg font-semibold mb-2 text-white">📍 Recent Search History:</h3>
                          <div className="flex flex-wrap gap-2">
                            {history.map((city, i) => (
                              <button
                                key={i}
                                className="bg-white/70 text-black px-4 py-2 rounded-full hover:bg-white transition"
                                onClick={() => fetchWeather(city)}
                              >
                                {city}
                              </button>
                            ))}
                          </div>
                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default Home;