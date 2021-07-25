import { createContext, Dispatch, SetStateAction } from "react";
import ICoordinates from "../interfaces/coordinates";

const LocationCoordinatesContext = createContext<
    Dispatch<SetStateAction<ICoordinates>>
>(() => null);

export default LocationCoordinatesContext;
