import WeatherType from "../enums/weatherType";

export default interface ICondition {
    weatherType: WeatherType;
    weatherDescription?: string;
    probabilityOfPrecipitation?: number;
}
