import React, {useState} from 'react';
import './App.css';

const api = {
    key: "2d71286bb9d4a67971e9ff6e1c293ad3",
    base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
    const [citySearch, setCitySearch] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
            if (evt.key === "Enter") {
                fetch(`${api.base}weather?q=${citySearch}&appid=${api.key}`)
                    .then(res => res.json())
                    .then(result => {
                            setCitySearch('');
                            setWeather(result);
                        }
                    );
            }
        }
    ;

    console.log(weather);

    return (
        <div className="App">
            <h2> {weather.name}</h2>
            <div className="search">
                <input
                    type="text"
                    className="search_input"
                    placeholder="Search"
                    onChange={e => setCitySearch(e.target.value)}
                    value={citySearch}
                    onKeyPress={search}
                />
            </div>
        </div>
    );
}

export default App;
