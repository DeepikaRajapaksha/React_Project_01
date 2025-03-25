import { getCurrentWeather } from "../api";
import "../Styles/CurrentWeather.css";

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

  return (
    <div className="CurrentWeather">
       <div className="temperature">
          <div className="weather-icon">
            <img 
            src={`${process.env.PUBLIC_URL}/dest/wether_icons/set04/big/${icon_num}.png`} 
            alt={summary}
            />
          </div>
       </div>
       <div className="other-info"></div>
    </div>
  )
}

export default CurrentWeather