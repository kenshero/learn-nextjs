// schema.js
const { makeExecutableSchema } = require('graphql-tools');
const typePosts = require('./Posts/types');
const resolverPosts = require('./Posts/resolvers');
var { merge } = require('lodash');
const Query = `
  type Query {
    posts(offset: Int, limit: Int): PostsData
    post(postID: String!): Posts
  }
`;
const Mutation = `
  type Mutation {
    createPost(title: String!, content: String): Posts
  }
`;
const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;
const resolvers = merge(resolverPosts)
const MyGraphQLSchema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Mutation, typePosts],
  resolvers
});
module.exports = MyGraphQLSchema