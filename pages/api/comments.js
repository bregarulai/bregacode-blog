import { GraphQLClient, gql } from 'graphql-request';

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export default async function comments(req, res) {
  const graphToken = process.env.GRAPH_TOKEN;
  const graphQLClient = new GraphQLClient(graphqlApi, {
    headers: {
      authorization: `Bearer ${graphToken}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
