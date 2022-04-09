import React, {useState} from "react";
import Weather from "./components/Weather/Weather.js";
import Corona2 from "./components/Corona/Corona2.js";
import axios from "axios";

import { fetchData } from "./api";


function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  // const [country, setCountry] = useState("")
  const cData = "";


  const key = '64be88d0435a2d6eca2e8e9877b67807'
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        // setCountry(response.data.sys.country)
        handleCountryChange(response.data.sys.country)
        console.log(response.data)
        // console.log(response.data.sys.country)
      })
      setLocation('')
    }
  }

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    const cData = ({CoronaData: fetchedData, country: country});
  };


  return (
    <div className="App">
      <div className="search">
        <input 
          type="text" 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
        />
      </div>
      <Weather data={data}/>
      {/* <Corona2 country={data.sys.country}/> */}
      <Corona2 data={cData}/>

    </div>
  );
}

export default App;
