const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";
export async function fetchApi(
    query: string,
    api: API | undefined = undefined
): Promise<any | undefined> {
    const key = getKey(api);
    const key2 = process.env.REACT_APP_GOOGLE_API_KEY;
    console.log(key);

    return await fetch(query + (getKey(api) ?? ""))
        .then((res) => res.json())
        .then(
            (result) => {
                return result;
            },
            (error) => {
                console.error(error);
                return undefined;
            }
        );
}

const getKey = (api: API | undefined): string | undefined => {
    switch (api) {
        case API.GOOGLE:
            return process.env.REACT_APP_GOOGLE_API_KEY;

        case API.OPENWEATHER:
            return process.env.REACT_APP_OPEN_WEATHER_API_KEY;

        default:
            return undefined;
    }
};

export enum API {
    GOOGLE,
    OPENWEATHER,
}
