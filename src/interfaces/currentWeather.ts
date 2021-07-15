import ITemperature from "./temperature";

export default interface ICurrentWeather {
    temperature: ITemperature;

    weatherDescription: string;
    weatherId: number;

    pressure: number;

    humidity: number;

    windSpeed: number;
}
