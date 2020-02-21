import User from '../models/User';
import City from '../models/City';
import UserCity from '../models/UserCity';

class UserController {
  async store(req, res) {
    // const user = await User.create(req.body);
    // return res.json(user);
    await City.create({
      name: req.body.city_name,
    })
      .then(city => {
        return User.create({
          name: req.body.name,
        }).then(user => {
          return UserCity.create({ user_id: user.id, city_id: city.id });
        });
      })
      .then(rsp => {
        return res.json(rsp);
      })
      .catch(err => {
        return res.status(400).json({ error: err });
      });
  }

  async update(req, res) {
    const user = await User.findByPk(req.body.user_id);
    if (!user) {
      return res.status(400).json('User not found');
    }
    const { id, name } = await user.update(req.body);
    return res.json({ id, name });
  }
}

export default new UserController();
