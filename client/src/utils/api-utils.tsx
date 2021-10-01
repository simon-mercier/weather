export async function fetchApi(
    url: string,
    api: API | undefined = undefined
): Promise<any | undefined> {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(api),
    });
    return response.json();
}

export enum API {
    GOOGLE,
    OPENWEATHER,
}
