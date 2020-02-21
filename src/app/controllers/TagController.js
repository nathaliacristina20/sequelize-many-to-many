import Tag from '../models/Tag';

class TagController {

  async store(req, res) {
    try {
      const tag = await Tag.create(req.body);
      return res.json(tag);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }
}

export default new TagController();
