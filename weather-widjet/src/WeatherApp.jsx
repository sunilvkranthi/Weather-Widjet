import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css"
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"wonderland",
        feelsLike:16.7,
        temp:17.3,
        tempMin:17.3,
        tempMax:17.3,
        humidity:20,
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