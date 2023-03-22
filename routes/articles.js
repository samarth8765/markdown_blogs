import express from 'express';
import {articleModel as Article} from './../db/models/article_schema.js';

const router = express.Router();


router.get('/new', (req,res)=>{
    res.render('article/new',{article: new Article()});
});

router.get('/:id', async (req, res) =>{
    const _id = req.params.id;
    let article;
    try{
        article = await Article.findById(_id);
    }
    catch(err){
        res.redirect('/');
    }
    res.render('/articles/show', {article: article});
});

router.post('/',async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const markdown = req.body.markdown;

    let article = new Article({
        title, description, markdown
    });
    try{
        article = await article.save();
        res.redirect(`/article/${article.id}`);
    }
    catch(e){
        res.render('./../views/article/new',{article});
    }
})


export{router};