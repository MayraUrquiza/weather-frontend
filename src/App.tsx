import "./App.css";
import { CitiesCard } from "./features/cities/components/citiesCard";
import { WeatherCard } from "./features/weather/components/weatherCard";
import { ForecastCard } from "./features/forecast/components/forecastCard";

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-4">
        <CitiesCard />
        <WeatherCard />
      </div>
      <div className="mt-4">
        <ForecastCard />
      </div>
    </div>
  );
}

export default App;
