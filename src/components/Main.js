import "../Styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { getHourlyForecast, getDailyForecast } from "../api";
function Main() {
  return (
    <div className="Main">
      <CurrentWeather />
      <Forecast
        type="hourly"
        title="Hourly Forecast"
        data={getHourlyForecast()}
      />
      <Forecast
        type="daily"
        title="21 Days Forecast"
        data={getDailyForecast()}
      />
    </div>
  );
}

export default Main;
