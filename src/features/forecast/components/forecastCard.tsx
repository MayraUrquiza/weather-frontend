import { useEffect } from "react";
import { getCityForecast } from "@/store/actions/forecast";
import { useAppDispatch, useAppSelector } from "@/store";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { getDateString } from "../utils";
import { ForecastCardItem } from "./forecastCardItem";

export const ForecastCard = () => {
  const dispatch = useAppDispatch();
  const {
    forecastReducer: forecast,
    citiesReducer: { selected: selectedCity },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getCityForecast());
  }, []);

  useEffect(() => {
    dispatch(getCityForecast(selectedCity.value));
  }, [selectedCity]);

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Object.values(forecast.days).map((day, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <Card>
              <CardHeader>{getDateString(day)}</CardHeader>
              <CardContent>
                {day.map((item) => (
                  <ForecastCardItem forecastItem={item} />
                ))}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
