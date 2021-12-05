import { request, gql } from 'graphql-request';

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            author {
              id
              name
              bio
              photo {
                url
              }
            }
            categories {
              name
              slug
            }
            featuredImage {
              url
              createdAt
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlApi, query);
  return result.postsConnection.edges;
};
