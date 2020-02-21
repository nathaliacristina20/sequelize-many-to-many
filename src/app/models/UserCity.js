import Sequelize, { Model } from 'sequelize';

class UserCity extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        city_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'cities',
            key: 'id',
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default UserCity;
