import WeatherIcon from "./WeatherIcon";

function HourlyForecastWidget({data}) {
  const { date, icon, summary, temperature, wind} = data;

  return (
    <div className="widget">
      <div className="day">{date}</div>
      <div className="time">{date}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} /> 
        </div>
        <div className="temperature"> {Math.round(temperature)} °C</div>
      </div>
      <div className="precipitation">{Math.round(precipitation.total)} mm/h </div>
      <div className="wind">
        <div className="speed">{Math.round(wind.speed)} mph </div>
        <div className="dir">
          <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </div>
  )
}

export default HourlyForecastWidget


