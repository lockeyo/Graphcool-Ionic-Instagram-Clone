import { ApolloClient, createNetworkInterface } from 'apollo-client';

// Polyfill fetch
import 'whatwg-fetch';

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/ciz5dctr01prd015261q0o8jd'
  }),
});

export {client}
