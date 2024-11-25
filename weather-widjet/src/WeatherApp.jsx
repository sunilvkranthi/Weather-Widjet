import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css"
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"wonderland",
        feelsLike:0.0,
        temp:0.0,
        tempMin:0.0,
        tempMax:0.0,
        humidity:0,
        weather:"haze",
    })
    

    let updateInfo=(newInfo)=>{
         setWeatherInfo(newInfo);
    }

    return(
        <div className="weatherApp">
            <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}