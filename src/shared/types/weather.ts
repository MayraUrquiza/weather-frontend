export interface IDayWeather {
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
  rain?: {
    "3h"?: number;
  };
  snow?: {
    "3h"?: number;
  };
}
