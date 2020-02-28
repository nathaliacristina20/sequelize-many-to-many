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

  async update(req, res) {
    try {

      const { tags, title } = req.body;
      const post = await Post.findByPk(req.params.id);

      post.title = title;

      if (!post) {
        return res.status(500).json({ error: 'Nao tem post' });
      }

      //if (tags && tags.length > 0) {
      await post.setTags(tags);
      //}

      await post.save();

      return res.status(200).json(post);

    } catch (err) {
      return res.status(500).json({ err });
    }
  }

}

export default new PostController();
