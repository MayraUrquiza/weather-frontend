import { requester } from "@/shared/utils/requester";
import { ActionTypes, IWeatherAction } from "@/store/types/actions";
import { IWeatherState } from "@/store/types/states";
import { Dispatch } from "@reduxjs/toolkit";

export const getCityWeather =
  (city?: string) => async (dispatch: Dispatch<IWeatherAction>) => {
    const { data } = await requester.get<IWeatherState>(
      city ? `/current/${city}` : "/current"
    );
    const action: IWeatherAction = {
      type: ActionTypes.SET_WEATHER,
      payload: data,
    };

    dispatch(action);
  };
