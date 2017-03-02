const { Posts } = require('../../db/conf');

const getPosts = (callback) => {
    Posts.find( (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(result)
      }
    });
}

const getPostById = (id, callback) => {
    Posts.findOne({_id: id }, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(result)
      }
    });
}

const createPost = (args, callback) => {
    const post = new Posts({
        title: args.title,
        content: args.content
    });
    post.save((err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(result)
      }
    });
}

module.exports = {
    getPosts,
    getPostById,
    createPost
};
