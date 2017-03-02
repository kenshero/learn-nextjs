// resolvers.js
var postServices = require('./services')
const resolveFunctions = {
  Query: {
    posts() {
      return new Promise((resolve, reject) => {
        postServices.getPosts( data =>{
          resolve(data)
        })
      })
    },
    post(_, {postID}){
      return new Promise((resolve, reject) => {
        postServices.getPostById(postID, data =>{
          resolve(data)
        })
      })
    }
  },
  Mutation: {
    createPost(_, { title, content }) {
      return new Promise((resolve, reject) => {
        var args = {
          title : title,
          content : content,
        }
        postServices.createPost( args , data =>{
          resolve(data)
        })
      })
    },
  }
};
module.exports = resolveFunctions;