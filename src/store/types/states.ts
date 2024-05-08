import { ICity } from "@/shared/types/cities";
import { IDayWeather } from "@/shared/types/weather";

export interface ILocationState {
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lon: number;
}

export interface ICitiesState {
  current: ILocationState;
  cities: ICity[];
  selected: ICity;
}

export interface IWeatherState {
  city: string;
  countryCode: string;
  lat: number;
  lon: number;
  sunrise: number;
  sunset: number;
  dt: number;
  temp: number;
  feels: number;
  pressure: number;
  humidity: number;
  mainCondition: { name: string; description: string };
  clouds: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  snow?: {
    "1h"?: number;
    "3h"?: number;
  };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
}

export interface IForecastState {
  city: string;
  countryCode: string;
  lat: number;
  lon: number;
  sunrise: number;
  sunset: number;
  days: { [key: string]: IDayWeather[] };
}
