import { combineReducers } from "@reduxjs/toolkit";
import { citiesReducer } from "./cities";
import { forecastReducer } from "./forecast";
import { weatherReducer } from "./weather";

export const rootReducer = combineReducers({
  forecastReducer,
  weatherReducer,
  citiesReducer,
});
