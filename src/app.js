const { syncAndSeed, db } = require('../server/index.js');
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

const authAPI = require('../server/api/auth');
const orderAPI = require('../server/api/order');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api/auth', authAPI);
app.use('/api/order', orderAPI);

app.get('/', (req,res,next) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

const init = async() => {
  try{
    await syncAndSeed();
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  } catch(ex){
    console.log(ex);
  }
}

init();