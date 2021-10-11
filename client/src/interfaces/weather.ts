import ICondition from "./condition";
import ITemperature from "./temperature";

export interface IWeather {
    currentWeather: ICurrentWeather;
    hourlyWeather: Array<IHourlyWeather>;
    dailyWeather: Array<IDailyWeather>;
}

export interface ICurrentWeather {
    temperature: ITemperature;

    condition: ICondition;

    humidity: number;

    clouds: number;

    uvi: number;

    sunrise: Date;

    sunset: Date;
}

export interface IHourlyWeather {
    hourlyTemperature: ITemperature;
    hourlyWeather: ICondition;
    date: Date;
}

export interface IDailyWeather {
    dailyTemperature: ITemperature;
    dailyWeather: ICondition;
    date: Date;
}
