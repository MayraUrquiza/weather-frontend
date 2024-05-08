import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store";
import { addCity } from "@/store/actions/cities";
import { ICity } from "@/shared/types/cities";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const availableCities: ICity[] = [
  { label: "Córdoba", value: "cordoba,cordoba,AR" },
  { label: "Buenos Aires", value: "buenos aires,buenos aires,AR" },
  { label: "Rosario", value: "rosario,santa fe,AR" },
  { label: "Mar del Plata", value: "mar del plata,buenos aires,AR" },
  { label: "San Miguel de Tucumán", value: "tucuman,,AR" },
  { label: "Salta", value: "salta,,AR" },
  { label: "Santa Fe", value: "santa fe,santa fe,AR" },
  { label: "Corrientes", value: "corrientes,corrientes,AR" },
  { label: "Bahía Blanca", value: "bahia blanca,bahia blanca,AR" },
  { label: "Resistencia", value: "resistencia,chaco,AR" },
  { label: "Posadas", value: "posadas,misiones,AR" },
  { label: "Villa de Merlo", value: "merlo,san luis,AR" },
  { label: "Quilmes", value: "quilmes,buenos aires,AR" },
  { label: "Santiago del Estero", value: "santiago del estero,,AR" },
  { label: "Neuquén", value: "neuquen,neuquen,AR" },
  { label: "San Carlos de Bariloche", value: "bariloche,rio negro,AR" },
  { label: "Ushuaia", value: "ushuaia,tierra del fuego,AR" },
];

export const CitiesCombobox = () => {
  const dispatch = useAppDispatch();
  const citiesState = useAppSelector((state) => state.citiesReducer);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full space-x-2">
          <span>Seleccionar ciudad</span>
          <PlusIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-none max-h-80 overflow-y-scroll">
        <DropdownMenuGroup>
          {availableCities
            .filter(
              (city) =>
                !citiesState.cities.some(
                  (selectedCity) =>
                    selectedCity.label === city.label ||
                    selectedCity.value === city.value
                )
            )
            .map((city) => (
              <DropdownMenuItem>
                <Button
                  className="w-full"
                  variant="ghost"
                  key={city.value}
                  onClick={() => {
                    dispatch(addCity(citiesState.current, city));
                  }}
                >
                  {city.label}
                </Button>
              </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
