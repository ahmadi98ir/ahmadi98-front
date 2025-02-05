import { Sequelize } from 'sequelize';

let sequelize;

if (!global.sequelize) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.NODE_ENV === 'production',
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production' ? {
        require: true,
        rejectUnauthorized: false
      } : false
    }
  });
  global.sequelize = sequelize;
} else {
  sequelize = global.sequelize;
}

export default sequelize;
