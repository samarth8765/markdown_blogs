import mongoose from 'mongoose';

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
        type:String,
        default : new Date()
    }
});

const articleModel = mongoose.model('Article',articleSchema);

export{articleModel};