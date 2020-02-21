import Sequelize, { Model } from 'sequelize';
// import UserCity from './UserCity';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        city_id: Sequelize.VIRTUAL,
      },
      {
        sequelize,
      }
    );

    // this.addHook('afterCreate', 'createUserCities', (user, options) => {
    //   UserCity.create({ user_id: user.id, city_id: user.city_id });
    // });

    // this.addHook('afterUpdate', 'updateUserCities', (user, options) => {
    // });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.City, {
      through: 'user_cities',
      as: 'city',
      foreignKey: 'city_id',
    });
  }
}

export default User;
