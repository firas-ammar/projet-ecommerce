const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
   image:{
       type:[String],
       required:true
   },
   titre:{
       type:String,
       required:true
   },
    state:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    description:{
        type:String,

    },
    disponible:{
        type:Boolean
    },

    categories: {
        type: String,
        required: true
    },

    sousCategories: {
        type: String,
        required: true
    },
    like: {
        type: [String],
        required: true
    },
    rating: {
        type: Number
    }
        
    
})

module.exports = Product = mongoose.model('product', ProductSchema ) //collection 'users'