import { ActionTypes, IForecastAction } from "../types/actions";
import { IForecastState } from "../types/states";

const initialState: IForecastState = {
  city: "",
  countryCode: "",
  lat: 0,
  lon: 0,
  sunrise: 0,
  sunset: 0,
  days: {},
};

export const forecastReducer = (
  state: IForecastState = initialState,
  action: IForecastAction
) => {
  switch (action.type) {
    case ActionTypes.SET_FORECAST:
      return {
        ...state,
        city: action.payload.city,
        countryCode: action.payload.countryCode,
        lat: action.payload.lat,
        lon: action.payload.lon,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset,
        days: action.payload.days,
      };
    default:
      return state;
  }
};
