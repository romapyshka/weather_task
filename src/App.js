import React, {useState, useEffect} from 'react';
import './App.css';

const api = {
    key: "2d71286bb9d4a67971e9ff6e1c293ad3",
    base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [location, setLocation] = useState('');
    const [catchLocation, setCatchLocation] = useState(false);
    const [catchLocalWeather, setCatchLocalWeather] = useState(false);

    useEffect(() => {
        const getLocation = async () => {
            return fetch('https://ipapi.co/json/', {method: "GET"})
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
            fetch(`${api.base}weather?q=${location}&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                        setWeather(result);
                        setCatchLocalWeather(true);
                    }
                );
        }
    }
    
    setTimeout(getLocalWeather, 1);
    console.log(location);
    console.log(weather);
    
    const searchWeather = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
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
            <h2> {weather.name}</h2>
            <div className="search">
                <input
                    type="text"
                    className="search_input"
                    placeholder="Search"
                    onChange={e => setCity(e.target.value)}
                    value={city}
                    onKeyPress={searchWeather}
                />
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