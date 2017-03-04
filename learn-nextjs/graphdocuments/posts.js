// posts.js
import gql from 'graphql-tag'

export const getPostsQuery = {
    query : gql`
      query {
        posts(offset: 0, limit: 5){
            postData {
              _id
              title
              content
            }
            postPageInfo {
              offset
              limit
              pageRange
            }
        }
      }
    `
}

export const getPostByIDQuery = (variables) => {
  return {
    query : gql`
      query($postID: String!) {
        post(postID: $postID) {
          _id
          title
          content
        }
      }
    `,
    variables
  }
}

export const createPost = (variables) => {
     return {
       mutation: gql`
          mutation createPost($title: String!, $content: String) {
            createPost(
                title: $title,
                content: $content
            ) {
              _id
              title
              votes
            }
          }
      `,
    variables: variables
  }
}
