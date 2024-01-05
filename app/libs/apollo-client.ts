import { ApolloClient, InMemoryCache } from "@apollo/client";

const endpoint = String(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);
const client = new ApolloClient({
   uri: endpoint,
    cache: new InMemoryCache()
});
export default client;