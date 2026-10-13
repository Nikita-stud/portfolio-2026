export default function CategoryModel(sequelize, Sequelize) {
  const Category = sequelize.define('Category', {
    name: {
      type: Sequelize.DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });

  Category.associate = function (models) {
    Category.hasMany(models.Work, {
      foreignKey: { name: 'category_id', allowNull: false },
      onDelete: 'RESTRICT',
    });
  };

  return Category;
}
