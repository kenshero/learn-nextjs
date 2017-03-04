const { Posts } = require('../../db/conf');

const getPosts = (offset, limit, callback) => {
  Posts.count({}, (err, count) => {
    const pageRange = Math.ceil(count / limit)
    Posts.find().sort({_id: 'desc'}).skip(offset).limit(limit).exec((err, docs) => {
      if (err) {
        callback(err)
      } else {
        const pageInfo = {
          offset,
          limit,
          pageRange
        }
        const resData = {
          postData: docs,
          postPageInfo: pageInfo
        }
        callback(resData)
      }
    })
  })
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
