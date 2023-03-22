const express = require('express')
const Article = require('./../db/models/article_schema.js');
const router = express.Router();

router.get('/new', (req,res)=>{
    res.render('article/new',{article: new Article()});
});

router.delete('/:id',async (req, res)=>{
    try{
        await Article.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }
    catch(e){
        console.log(e);
    }
});

router.get('/:slug', async (req, res) =>{
    const slug = req.params.slug;
    let article;
    try{
        article = await Article.findOne({slug});
        res.render('./../views/article/show', {article: article});
    }
    catch(err){
        res.redirect('/');
    }
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
        res.redirect(`/article/${article.slug}`);
    }
    catch(e){
        res.render('./../views/article/new',{article});
    }
});




module.exports = router;