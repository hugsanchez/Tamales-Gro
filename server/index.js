const db = require('./db');

const User = require('../server/models/User');


const syncAndSeed = async() => {
  await db.sync({ force: true });

  const user = await User.create({
    username: 'tamalsan',
    password: '@Hermano17'
  });
};

module.exports = {
  syncAndSeed,
  db
}