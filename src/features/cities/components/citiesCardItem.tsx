import { FC } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ICity } from "@/shared/types/cities";
import { useAppDispatch, useAppSelector } from "@/store";
import { removeCity, setSelectedCity } from "@/store/actions/cities";

export const CitiesCardItem: FC<{ city: ICity }> = ({ city }) => {
  const dispatch = useAppDispatch();
  const { selected, current } = useAppSelector((state) => state.citiesReducer);

  return (
    <div className="grid grid-cols-6">
      <Button
        className="w-full text-left col-span-5"
        variant={
          selected.label === city.label && selected.value === city.value
            ? "outline"
            : "ghost"
        }
        onClick={() => dispatch(setSelectedCity(current, city))}
      >
        {city.label}
      </Button>
      {current.city !== city.label && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(removeCity(current, city))}
        >
          <XIcon />
        </Button>
      )}
    </div>
  );
};
