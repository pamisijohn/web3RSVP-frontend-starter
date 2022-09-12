import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/pamisijohn/web3rsvp-by-pamisi",
  cache: new InMemoryCache(),
});

export default client;
