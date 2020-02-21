import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import City from '../app/models/City';
import UserCity from '../app/models/UserCity';

const models = [User, City, UserCity];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
