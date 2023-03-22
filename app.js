import express from 'express';
import {router as articleRouter} from './routes/articles.js';
import './db/connection.js';
const app = express();
const PORT = process.env.PORT || 8000;


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use('/article',articleRouter);

app.get('/',(req, res)=>{
    const article = [{
        title : 'test article',
        createdAt : new Date(),
        description : 'Test Description'
    }]

    res.render('article/index', {article});
});

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
});