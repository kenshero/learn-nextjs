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
    `,
    forceFetch: true
}
