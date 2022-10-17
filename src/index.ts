import express, {Request, Response} from 'express';
import path from 'path';

//const syncAndSeed = require('../server/index');
const port = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));


app.get('/', (req: Request,res: Response,next) => {
  res.sendFile(path.join(__dirname,'../../dist/index.html'))
  // res.send(`
  //   <div>
  //     <h1>Hi there!</h1>
  //   </div>
  // `);
});

const init = async() => {
  try{
    //await syncAndSeed();
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  } catch(ex){
    console.log(ex);
  }
};

init();