const mongoose =  require('mongoose');
const marked =  require('marked'); // helps in creating markdown
const slugify = require('slugify'); // Converts any String to a slug. Useful for URLs, filenames, IDs, and more.


const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String
    },
    markdown:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default : new Date()
    },
    slug:{
        type:String,
        requried: true,
        unique: true
    }
});

articleSchema.pre('validate', function (next){
    if(this.title){
        this.slug = slugify(this.title,{lower: true, strict: true})
    }
    next();
});

const articleModel = mongoose.model('Article',articleSchema);

module.exports = articleModel;