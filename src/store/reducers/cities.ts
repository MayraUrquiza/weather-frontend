import { ICitiesAction, ActionTypes } from "../types/actions";
import { ICitiesState } from "../types/states";

const initialState: ICitiesState = {
  current: {
    city: "",
    country: "",
    countryCode: "",
    lat: 0,
    lon: 0,
  },
  cities: [],
  selected: { label: "", value: "" },
};

export const citiesReducer = (
  state: ICitiesState = initialState,
  action: ICitiesAction
) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_LOCATION:
      if (
        !state.cities.some(
          (selectedCity) =>
            selectedCity.label === action.payload.city.label ||
            selectedCity.value === action.payload.city.value
        )
      ) {
        return {
          current: action.payload.current,
          cities: [...state.cities, action.payload.city],
          selected: action.payload.city,
        };
      } else {
        return {
          ...state,
          current: action.payload.current,
        };
      }
    case ActionTypes.ADD_CITY:
      return { ...state, cities: [...state.cities, action.payload.city] };
    case ActionTypes.REMOVE_CITY: {
      const filteredCities = state.cities.filter(
        (city) =>
          city.label !== action.payload.city.label &&
          city.value !== action.payload.city.value
      );

      return {
        ...state,
        cities: filteredCities,
        selected:
          state.selected.label === action.payload.city.label &&
          state.selected.value === action.payload.city.value
            ? filteredCities[0]
            : state.selected,
      };
    }
    case ActionTypes.SET_SELECTED_CITY:
      return {
        ...state,
        selected: action.payload.city,
      };
    default:
      return state;
  }
};
