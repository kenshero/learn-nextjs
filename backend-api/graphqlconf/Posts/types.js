// types.js
const PostsData = `
    type PostsData {
      postData: [Posts]
      postPageInfo: PostPageInfo
    }
`;

const Posts = `
    type Posts {
      _id: String
      title: String
      content: String
    }
`;

const PostPageInfo = `
    type PostPageInfo {
      offset: Int
      limit: Int
      pageRange: Int
    }
`;

module.exports = () => [PostsData, Posts, PostPageInfo]
