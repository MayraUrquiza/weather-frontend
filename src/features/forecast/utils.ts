import { IDayWeather } from "@/shared/types/weather";

export const getDateString = (day: IDayWeather[]) =>
  new Date(day[0].dt * 1000).toLocaleString("es", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
