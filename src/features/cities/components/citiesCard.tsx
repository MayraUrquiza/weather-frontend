import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { getCurrentLocation } from "@/store/actions/cities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONFIG } from "@/config/defaults";
import { CitiesCombobox } from "./citiesCombobox";
import { CitiesCardItem } from "./citiesCardItem";

export const CitiesCard = () => {
  const dispatch = useAppDispatch();

  const { cities } = useAppSelector((state) => state.citiesReducer);

  useEffect(() => {
    dispatch(getCurrentLocation());
  }, []);

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Ciudades</CardTitle>
        {cities.length < CONFIG.CITIES_LIMIT + 1 && <CitiesCombobox />}
      </CardHeader>
      <CardContent className="text-left">
        {cities.map((city) => (
          <CitiesCardItem city={city} />
        ))}
      </CardContent>
    </Card>
  );
};
