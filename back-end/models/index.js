import Sequelize from 'sequelize';
import mysql2 from 'mysql2';
import Category from './Category';
import Role from './Role';
import User from './User';
import Work from './Work';

const connection = {
  database: process.env.DATABASE_NAME,
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  dialectModule: mysql2,
};

const sequelize = new Sequelize(connection);
const db = {};
db.sequelize = sequelize;
db.Category = Category(sequelize, Sequelize);
db.Role = Role(sequelize, Sequelize);
db.User = User(sequelize, Sequelize);
db.Work = Work(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
export default db;
