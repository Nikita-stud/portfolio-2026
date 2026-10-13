export default function WorkModel(sequelize, Sequelize) {
  const Work = sequelize.define(
    'Work',
    {
      name: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      teaser: {
        type: Sequelize.DataTypes.STRING(130),
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      thumbnail: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      github: {
        type: Sequelize.DataTypes.STRING,
        validate: { isUrl: true },
      },
      live_url: {
        type: Sequelize.DataTypes.STRING,
        validate: { isUrl: true },
      },
      date: {
        type: Sequelize.DataTypes.DATEONLY,
      },
      status: {
        type: Sequelize.DataTypes.ENUM('In Progress', 'Building', 'Completed'),
        allowNull: false,
        defaultValue: 'In Progress',
      },
    },
    {
      timestamps: false,
    },
  );

  Work.associate = function (models) {
    Work.belongsTo(models.User, {
      foreignKey: { name: 'user_id', allowNull: false },
      onDelete: 'CASCADE',
    });
    Work.belongsTo(models.Category, {
      foreignKey: { name: 'category_id', allowNull: false },
      onDelete: 'RESTRICT',
    });
  };

  return Work;
}
