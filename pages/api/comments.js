import { GraphQLClient, gql } from 'graphql-request';

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlApi, {
    headers: {
      authorization: `Bearer ${process.env.GRAPH_TOKEN}`,
    },
  });
}
