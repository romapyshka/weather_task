import React, {useState, useEffect} from 'react';
import './App.css';

const api = {
    key: "45a882703e376c6d8873aa87229ebf48",
    baseForWeather: "https://api.openweathermap.org/data/2.5/",
    baseForLocation: "https://ipapi.co/json/",
};

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [location, setLocation] = useState('');
    const [catchLocation, setCatchLocation] = useState(false);
    const [catchLocalWeather, setCatchLocalWeather] = useState(false);

    useEffect(() => {
        const getLocation = async () => {
            return fetch(api.baseForLocation, {method: "GET"})
                .then(res => res.json())
                .then(result => {
                    setLocation(result.city);
                    setCatchLocation(true);
                })
        };
        if (catchLocation === false) {
            getLocation();
        }
    }, []);

    async function getLocalWeather() {
        if (catchLocation === true && catchLocalWeather === false) {
            fetch(`${api.baseForWeather}weather?q=${location}&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setCatchLocalWeather(true);
                });
        }

    }

    setTimeout(getLocalWeather, 1);

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];

        return `${day} ${date} ${month}`
    };

    const searchWeather = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.baseForWeather}weather?q=${city}&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                        setCity('');
                        setWeather(result);
                    }
                );
        }
    };

    return (
        <div className="App">
            <div className="search">
                <input
                    type="text"
                    className="search_input"
                    placeholder="Search"
                    onChange={e => setCity(e.target.value)}
                    value={city}
                    onKeyPress={searchWeather}
                />
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location_information">

                            <div className="location">
                                {weather.name},
                                {weather.sys.country}
                            </div>
                            <div className="data">
                                {dateBuilder(new Date())}
                            </div>

                        </div>

                        <div className="weather_information">

                            <div className="temp">
                                15°

                                <div className="weather_status">
                                    Snow
                                </div>
                                <div className="weather_description">
                                    Little snow
                                </div>
                                <div className="wind">
                                    Wind: 3 m/s
                                </div>

                            </div>


                        </div>
                    </div>
                ) : ('')}

            </div>
        </div>
    );
}

export default App;


// useEffect(() => {
//     async function getLocation() {
//         return new Promise(() => {
//             if (catchLocation === false) {
//                 fetch('https://ipapi.co/json/')
//                     .then(res => res.json())
//                     .then(result => {
//                             setLocation(result);
//                             setCatchLocation(true);
//                         }
//                     );
//             }
//             if (catchLocalWeather === false) {
//                 fetch(`${api.base}weather?q=${location.city}&appid=${api.key}`)
//                     .then(res => res.json())
//                     .then(result => {
//                             setWeather(result);
//                             setCatchLocalWeather(true);
//                         }
//                     );
//             }
//         });
//     }
//     getLocation();
//
// }, []);

// useEffect(() => {
//         const getLocation = () => {
//             return fetch('https://ipapi.co/json/', {method: "GET"})
//                 .then(res => res.json())
//                 .then(result => {
//                     setLocation(result);
//                     setCatchLocation(true);
//                 });
//         };
//     if (catchLocation === false) {
//         getLocation().then(r => getLocalWeather());
//     }
//     }, []);

// function getLocation() {
//     if (catchLocation === false) {
//         fetch('https://ipapi.co/json/')
//             .then(res => res.json())
//             .then(result => {
//                     setLocation(result);
//                     setCatchLocation(true);
//                 }
//             );
//     }
// }
//
// useEffect(() => {
//     async function getLocation() {
//         return () => {
//             if (catchLocation === false) {
//                 fetch('https://ipapi.co/json/')
//                     .then(res => res.json())
//                     .then(result => {
//                             setLocation(result.city);
//                             setCatchLocation(true);
//                         }
//                     );
//             }
//         };
//     }
//     getLocation().then(r => setTimeout(getLocalWeather, 100));
//
// }, []);