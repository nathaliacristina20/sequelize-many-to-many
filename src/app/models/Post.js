import Sequelize, { Model } from 'sequelize';

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Tag, {
      through: 'tag_posts',
      as: 'tags',
      foreignKey: 'post_id',
      otherKey: 'tag_id',
    });
  }

}

export default Post;
