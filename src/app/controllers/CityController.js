import City from '../models/City';

class CityController {
  async store(req, res) {
    const city = await City.create(req.body);
    return res.json(city);
  }
}

export default new CityController();
