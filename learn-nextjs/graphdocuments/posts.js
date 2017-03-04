// posts.js
import gql from 'graphql-tag'

export const getPostsQuery = (variables) => {
  return {
    query : gql`
      query($offset: Int, $limit: Int, $activePage: Int) {
        posts(offset: $offset, limit: $limit, activePage: $activePage){
            postData {
              _id
              title
              content
            }
            postPageInfo {
              offset
              limit
              activePage
              pageRange
            }
        }
      }
    `,
    variables
  }
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
