import React from "react";
import './Weather.css';

const Weather = (props) => {

  return (
    <div className="app">
      <div className="container">

        <div className="top">
          <div className="location">
            <p>{props.data.name} {props.data.sys ? <p>{props.data.sys.country}</p> : null}</p>
            
          </div>

          <div className="temp">
            {props.data.main ? <h1>{props.data.main.temp.toFixed()}ºF</h1> : null}
          </div>

          <div className="report">
            {props.data.weather ? <p>{props.data.weather[0].main};</p> : null}
          </div>

          <div className="description">
            {props.data.weather ? <p>{props.data.weather[0].description.charAt(0).toUpperCase() + 
            props.data.weather[0].description.slice(1) }</p> : null}
          </div>

          <div className="icon">
            {props.data.weather ? <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="icon" /> : null}
          </div>
        </div>
{/* ----------------------------------------- */}
        {props.data.main !== undefined && 
          <div className="bottom">
          <div className="feels">
            <h4>Feels Like</h4>
            {props.data.main ? <p>{props.data.main.feels_like.toFixed()}ºF</p> : null}
          </div>

          <div className="humidity">
            <h4>Humidity</h4>
            {props.data.main ? <p>{props.data.main.humidity}%</p> : null}
          </div>

          <div className="wind">
            <h4>Wind Speed</h4>
            {props.data.wind ? <p>{props.data.wind.speed.toFixed()} MPH</p> : null}
          </div>
        </div>
        }

      </div>
    </div>
  );
}

export default Weather;