import { GraphQLClient, gql } from 'graphql-request';

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlApi, {
    headers: {
      authorization: `Bearer ${process.env.GRAPH_TOKEN}`,
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

  const result = await graphQLClient.request(query, req.body);
  res.status(201).send(result);
}
