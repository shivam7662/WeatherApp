import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = 
    "https://media.istockphoto.com/id/1288627562/photo/aerial-view-of-bangkok-thailand-in-evening.jpg?s=612x612&w=0&k=20&c=hluo5YoM4XxpEtSh17FshgVBsSw00yqZQugyAkd5LBs=";

    const HOT_URL = 
    "https://media.istockphoto.com/id/484577977/photo/sun-and-city.jpg?s=1024x1024&w=is&k=20&c=uKKg3TcAmXrmPpWYcHAzJ6KSB_Tgyq8VAKZxjkp5Zpc=";

    const COLD_URL = 
    "https://images.unsplash.com/photo-1709751851178-9679cc930c6f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL = 
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";

    return (
        <div className="InfoBox">
            <br />
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="Weather Info"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <AcUnitIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <ThunderstormIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                            <div>Temperature = {info.temp}&deg;C</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>Min Temp. = {info.tempMin}&deg;C</div>
                            <div>Max Temp. = {info.tempMax}&deg;C</div>
                            <div>The Weather Feels Like = {info.feelsLike}&deg;C</div>
                            <div>Weather = {info.weather}</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
