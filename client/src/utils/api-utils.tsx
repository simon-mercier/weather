export async function fetchApi(
    url: string,
    api: API | undefined = undefined
): Promise<any | undefined> {
    return await fetch(getApiUrl(api), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
    }).then((res) => res.json());
}

const getApiUrl = (api: API | undefined) => {
    switch (api) {
        case API.GOOGLE:
            return "api/google";
        case API.OPENWEATHER:
            return "api/openweathermap";
        default:
            return "api";
    }
};

export enum API {
    GOOGLE,
    OPENWEATHER,
}
