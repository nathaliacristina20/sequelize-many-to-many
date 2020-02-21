import Sequelize, { Model } from 'sequelize';

class Tag extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Post, {
      through: 'tag_posts',
      as: 'posts',
      foreignKey: 'tag_id',
    });
  }

}

export default Tag;
