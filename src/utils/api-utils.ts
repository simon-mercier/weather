const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";
export async function fetchApi(query: string): Promise<any | undefined> {
    return await fetch(CORS_ANYWHERE_URL + query)
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
