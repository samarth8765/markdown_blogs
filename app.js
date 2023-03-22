const express = require('express')
const methodOverride = require('method-override');
const articleRouter = require('./routes/articles.js');
require('./db/connection.js');
const  Article = require('./db/models/article_schema.js');
const app = express();
const PORT = process.env.PORT || 8000;



app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', async(req, res)=>{
    const article = await Article.find().sort({createdAt:'desc'});
    res.render('article/index', {article});
});
app.use('/article', articleRouter);

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
});