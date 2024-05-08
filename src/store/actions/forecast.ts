import { requester } from "@/shared/utils/requester";
import { ActionTypes, IForecastAction } from "@/store/types/actions";
import { IForecastState } from "@/store/types/states";
import { Dispatch } from "@reduxjs/toolkit";

export const getCityForecast =
  (city?: string) => async (dispatch: Dispatch<IForecastAction>) => {
    const { data } = await requester.get<IForecastState>(
      city ? `/forecast/${city}` : "/forecast"
    );
    const action: IForecastAction = {
      type: ActionTypes.SET_FORECAST,
      payload: data,
    };

    dispatch(action);
  };
