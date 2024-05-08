import { ICity } from "@/shared/types/cities";
import { IForecastState, ILocationState, IWeatherState } from "./states";

export enum ActionTypes {
  SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION",
  ADD_CITY = "ADD_CITY",
  REMOVE_CITY = "REMOVE_CITY",
  SET_SELECTED_CITY = "SET_SELECTED_CITY",
  SET_WEATHER = "SET_WEATHER",
  SET_FORECAST = "SET_FORECAST",
}

export interface ICitiesAction {
  type:
    | ActionTypes.ADD_CITY
    | ActionTypes.REMOVE_CITY
    | ActionTypes.SET_CURRENT_LOCATION
    | ActionTypes.SET_SELECTED_CITY;
  payload: { current: ILocationState; city: ICity };
}

export interface IWeatherAction {
  type: ActionTypes.SET_WEATHER;
  payload: IWeatherState;
}

export interface IForecastAction {
  type: ActionTypes.SET_FORECAST;
  payload: IForecastState;
}
