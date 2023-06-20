import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div>{formattedDate}</div>
      <div>
        <strong>Min temperature:</strong> {temperature.min} &deg;C
      </div>
      <div>
        <strong>Max temperature:</strong> {temperature.max} &deg;C
      </div>
      <div>
        <strong>Humidity:</strong> {humidity} %
      </div>
      <div>
        <strong>Wind speed:</strong> {wind.speed} mph
      </div>
    </div>
  );
}

export default ForecastDetails;
