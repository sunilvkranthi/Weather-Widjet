import "./InfoBox.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';

export default function InfoBox({info}){
    const HAZE_URL = "https://plus.unsplash.com/premium_photo-1665772800584-d2da6dba1e4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D" 
    
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1661874065400-c5c3e381721e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1biUyMGFuZCUyMGJyaWdodCUyMGVudmlyb25tZW50fGVufDB8fDB8fHww";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.webp?a=1&b=1&s=612x612&w=0&k=20&c=5JbnjvMjP0e-eOi9OhaS6CzHR_I3UWdkZaYjDcBjL94=";

    return(
        <>
        <div className="info-box">
        
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
         component="img"
         alt="green iguana"
         height="140"
         image={info.humidity>80? RAIN_URL:info.temp<15?COLD_URL:info.temp<=25?HAZE_URL:HOT_URL}
         />
        <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {info.city}&nbsp;{info.humidity>80?<ThunderstormIcon/>:info.temp<15?<AcUnitIcon/>:info.temp<=25?<AirIcon/>:<WbSunnyIcon/>}
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
            <div>Min Temp = {info.tempMin}&deg;C</div>
            <div>Max Temp = {info.tempMax}&deg;C</div>
            <div>The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C </div>
         </Typography>
        </CardContent>
        </Card>

         </div> 
        </>
    )
}