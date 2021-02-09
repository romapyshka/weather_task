import React, {useEffect, useState} from 'react';
import './App.css';

const api = {
    key: "c14d884c9ad0731105aa7fcf29448963",
    base: "https://api.openweathermap.org/data/2.5/"
};

// navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log('latitude is: ', position.coords.latitude);
//       console.log('longitude is: ', position.coords.longitude);
//     }
// );

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});


    // const Data = fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
    //     .then(res => res.json())
    //     .then(result => setWeather(result));


    // const getWeather = async () => {
    //     const api_call = await Promise.all( () => {fetch(`${api.base}weather?q=Uzhgorod&appid=${api.key}`)});
    //     const data = await api_call.json();
    // };



    useEffect(() => {
      async function getData(city) {
        return new Promise(() => {
          fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
              .then(res => res.json())
              .then(data => {
                setWeather(data);
              })
        });
      }
      getData('Uzhgorod');

    }, []);

    console.log(weather);

    return (
        <div className="App">
            <h2> Welcome user!</h2>
        </div>
    );
}

export default App;
