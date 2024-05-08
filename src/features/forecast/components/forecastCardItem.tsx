import { FC } from "react";
import { DropletIcon, WindIcon } from "lucide-react";
import { IDayWeather } from "@/shared/types/weather";

export const ForecastCardItem: FC<{ forecastItem: IDayWeather }> = ({
  forecastItem,
}) => {
  return (
    <div className="grid md:grid-cols-4">
      <span className="font-light">{`${new Date(
        forecastItem.dt * 1000
      ).toLocaleTimeString()}`}</span>
      <span className="font-bold">{`${forecastItem.temp}°C`}</span>
      <div className="flex space-x-2">
        <DropletIcon className="stroke-blue-300" />
        <p className="text-md font-light capitalize">{`${forecastItem.humidity}%`}</p>
      </div>
      <div className="flex space-x-2">
        <WindIcon className="stroke-blue-300" />
        <p className="text-md font-light capitalize">{`${forecastItem.wind.speed} km/h`}</p>
      </div>
    </div>
  );
};
