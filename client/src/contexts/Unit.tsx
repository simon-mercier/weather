import { Dispatch, SetStateAction, createContext } from "react";
import UnitType from "../enums/unit";

const UnitContext = createContext<
    [UnitType, Dispatch<SetStateAction<UnitType>>]
>([{} as UnitType, () => null]);

export default UnitContext;
