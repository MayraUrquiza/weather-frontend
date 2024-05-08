import { ICity } from "@/shared/types/cities";
import { requester } from "@/shared/utils/requester";
import { ActionTypes, ICitiesAction } from "@/store/types/actions";
import { ILocationState } from "@/store/types/states";
import { Dispatch } from "@reduxjs/toolkit";

export const getCurrentLocation =
  () => async (dispatch: Dispatch<ICitiesAction>) => {
    const { data } = await requester.get<ILocationState>("/location");
    const action: ICitiesAction = {
      type: ActionTypes.SET_CURRENT_LOCATION,
      payload: {
        current: data,
        city: { value: `${data.city},,${data.countryCode}`, label: data.city },
      },
    };

    dispatch(action);
  };

export const addCity =
  (currentLocation: ILocationState, city: ICity) =>
  (dispatch: Dispatch<ICitiesAction>) => {
    const action: ICitiesAction = {
      type: ActionTypes.ADD_CITY,
      payload: { current: currentLocation, city },
    };

    dispatch(action);
  };

export const removeCity =
  (currentLocation: ILocationState, city: ICity) =>
  (dispatch: Dispatch<ICitiesAction>) => {
    const action: ICitiesAction = {
      type: ActionTypes.REMOVE_CITY,
      payload: { current: currentLocation, city },
    };

    dispatch(action);
  };

export const setSelectedCity =
  (currentLocation: ILocationState, city: ICity) =>
  (dispatch: Dispatch<ICitiesAction>) => {
    const action: ICitiesAction = {
      type: ActionTypes.SET_SELECTED_CITY,
      payload: { current: currentLocation, city },
    };

    dispatch(action);
  };
