import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    let API_KEY = "f325a3eb30e47c4cd16edd6096e3ecd2"
    let weather_api ="https://api.openweathermap.org/data/2.5/weather"

    let getWeather=async (city)=>{
        try{
            let weather = await fetch(`${weather_api}?q=${city}&appid=${API_KEY}&units=metric`)
            weather = await weather.json();
            let result = {
                city:city,
                temp:weather.main.temp,
                tempMin:weather.main.temp_min,
                tempMax:weather.main.temp_max,
                humidity:weather.main.humidity,
                feelsLike:weather.main.feels_like,
                weather:weather.weather[0].description,
            }
            return result;
        }
        catch(error){
            throw error;
        }
            
    }
    

    let handleInput=(event)=>{
      setCity(event.target.value)
    }
     
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            let newInfo = await getWeather(city);
            updateInfo(newInfo);
             setCity("");
             setError(false);
        }catch(err){
            setError(true)
        }
          
    }

    return(
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" onChange={handleInput} value={city} label="City Name" variant="outlined" required/>
            <br /><br />
            <Button type='submit' variant="contained">
             Search
            </Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}