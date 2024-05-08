import { ActionTypes, IWeatherAction } from "../types/actions";
import { IWeatherState } from "../types/states";

const initialState: IWeatherState = {
  city: "",
  countryCode: "",
  lat: 0,
  lon: 0,
  sunrise: 0,
  sunset: 0,
  dt: 0,
  temp: 0,
  feels: 0,
  pressure: 0,
  humidity: 0,
  mainCondition: { description: "", name: "" },
  clouds: 0,
  wind: { speed: 0, deg: 0 },
};

export const weatherReducer = (
  state: IWeatherState = initialState,
  action: IWeatherAction
) => {
  switch (action.type) {
    case ActionTypes.SET_WEATHER:
      return {
        ...state,
        city: action.payload.city,
        countryCode: action.payload.countryCode,
        lat: action.payload.lat,
        lon: action.payload.lon,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset,
        dt: action.payload.dt,
        temp: action.payload.temp,
        feels: action.payload.feels,
        pressure: action.payload.pressure,
        humidity: action.payload.humidity,
        mainCondition: action.payload.mainCondition,
        clouds: action.payload.clouds,
        wind: action.payload.wind,
        snow: action.payload.snow,
        rain: action.payload.rain,
      };
    default:
      return state;
  }
};
