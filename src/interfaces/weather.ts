import ICondition from "./condition";
import ITemperature from "./temperature";

export interface IWeather {
    currentWeather: ICurrentWeather;
    hourlyWeather: IHourlyWeather;
    dailyWeather: IDailyWeather;
}

export interface ICurrentWeather {
    temperature: ITemperature;

    condition: ICondition;

    humidity: number;

    clouds: number;

    uvi: number;
}

export interface IHourlyWeather {
    hourlyTemperature: Array<ITemperature>;
    hourlyWeather: Array<ICondition>;
}

export interface IDailyWeather {
    dailyTemperature: Array<ITemperature>;
    dailyWeather: Array<ICondition>;
}
