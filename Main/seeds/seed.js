const sequelize = require('../config/connection');
const { User, Gardens } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Gardens.create({
      ...project,

    });
  }

  process.exit(0);
};

seedDatabase();
