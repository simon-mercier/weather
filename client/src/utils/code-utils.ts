import UnitType from "../enums/unit";

export const random = (max: number) => Math.floor(Math.random() * max);

export const randomMinMax = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

export const capitalizeFirstLetter = (string: string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1) ?? "Undefined";
};

export const toggleUnit = (unit: UnitType) =>
    unit === UnitType.C ? UnitType.F : UnitType.C;
