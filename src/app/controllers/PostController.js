import Post from '../models/Post';
import Tag from '../models/Tag';

class PostController {

  async store(req, res) {
    try {
      const { tags, ...data } = req.body;
      const post = await Post.create(data);
      if (tags && tags.length > 0) {
        await post.setTags(tags);
      }
      return res.status(200).json(post);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }
}

export default new PostController();
