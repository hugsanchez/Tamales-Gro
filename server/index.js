const db = require('./db');

const User = require('./models/User');
const Order = require('./models/Order');


const syncAndSeed = async() => {
  await db.sync({ force: true });

  const user = await User.create({
    username: 'tamalsan',
    password: '@Hermano17'
  });

  const orders = await Promise.all([
    Order.create({
      total: 200,
      date: new Date().toString()
    }),
    Order.create({
      total:100,
      date: new Date().toString()
    }),
    Order.create({
      total:300,
      date: new Date().toString()
    })
  ])
};

module.exports = {
  syncAndSeed,
  db
}