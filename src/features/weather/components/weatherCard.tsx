import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { getCityWeather } from "@/store/actions/weather";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { DropletIcon, WindIcon, SunriseIcon, SunsetIcon } from "lucide-react";

export const WeatherCard = () => {
  const dispatch = useAppDispatch();
  const {
    weatherReducer: currentWeather,
    citiesReducer: { selected: selectedCity },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getCityWeather());
  }, []);

  useEffect(() => {
    dispatch(getCityWeather(selectedCity.value));
  }, [selectedCity]);

  return (
    <Card className="p-4 md:col-span-2">
      <CardHeader>
        <CardTitle className="capitalize">{`${currentWeather.city}`}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-5xl font-semi-bold">{`${currentWeather.temp}°C`}</CardTitle>
        <Label className="capitalize text-lg font-normal">
          {currentWeather.mainCondition.description}
        </Label>
        <CardDescription className="font-semi-bold py-2">{`Sensación térmica ${currentWeather.feels}° C`}</CardDescription>
        <CardDescription className="flex items-center space-x-4 py-2">
          <DropletIcon className="stroke-blue-300" />
          <p className="text-md capitalize">{`Humedad: ${currentWeather.humidity}%`}</p>
        </CardDescription>
        <CardDescription className="flex items-center space-x-4 py-2">
          <WindIcon className="stroke-blue-300" />
          <p className="text-md capitalize">{`viento: ${currentWeather.wind.speed} km/h`}</p>
        </CardDescription>
        <CardDescription className="flex items-center space-x-4 py-2">
          <SunriseIcon className="stroke-orange-500" />
          <p className="text-md capitalize">
            {`Amanecer: ${new Date(
              currentWeather.sunrise * 1000
            ).toLocaleTimeString()}`}
          </p>
        </CardDescription>
        <CardDescription className="flex items-center space-x-4 py-2">
          <SunsetIcon className="stroke-purple-500" />
          <p className="text-md capitalize">{`Atardecer: ${new Date(
            currentWeather.sunset * 1000
          ).toLocaleTimeString()}`}</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
};
