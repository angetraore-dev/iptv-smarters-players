const API_URL = String(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);
const headers = { "Content-Type": "application/json" };

export async function fetchAPI(
    query = "",
    { variables }: Record<string, any> = {}
) {

    const { res } = await fetch(API_URL, {
        headers,
        method: "POST",
        body: JSON.stringify({
            query,
            variables,
        }),
        next: { revalidate: 10},

    });

    const json = await res.json();

    return json.data;
}