import { getCurrentWeather } from "../api";
import "../Styles/CurrentWeather.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function CurrentWeather() {
    const data = getCurrentWeather();
    const {
        cloud_cover,
        feels_like,
        humidity,
        icon_num,
        precipitation,
        summary,
        temperature,
        uv_index,
        visibility,
        wind,
    } = data;

    const place = "London";

  return (
    <div className="CurrentWeather">
        <div className="location">
            <i className="fas fa-map-marker-alt"></i> {place}
        </div>
       <div className="temperature">
          <div className="weather-icon">
            <img 
            src={`${process.env.PUBLIC_URL}/dest/weather_icons/set04/big/${icon_num}.png`} 
            alt={summary}
            />
          </div>
          <div className="value">
                <div className="real">{temperature} °C</div>
                <div className="feels_like"> feels like {feels_like} °C</div>
          </div>
       </div>
       <div className="summary">{summary}</div>
    </div>
  )
}

export default CurrentWeather;