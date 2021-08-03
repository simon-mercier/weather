const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";
export async function fetchApi<P>(
    query: string,
    props: P | null = null
): Promise<any | undefined> {
    return await fetch(CORS_ANYWHERE_URL + query)
        .then((res) => res.json())
        .then(
            (result) => {
                if (props === null) return result;

                return props ? result : undefined;
            },
            (error) => {
                console.error(error);
                return undefined;
            }
        );
}
