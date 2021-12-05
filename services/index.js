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
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlApi, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query getPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
    }
  `;
  const result = await request(graphqlApi, query);
  return result.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query getPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_som: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlApi, query);
  return result.posts;
};