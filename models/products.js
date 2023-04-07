const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        end_year: {
            type:Date,
            default:"",
        },
        intensity: {
            type:Number,
            default:"",
        },
        sector: {
            type:String,
            default:"",
        },
        topic: {
            type:String,
            default:"",
        },
        insight: {
            type:String,
            default:"",
        },
        url: {
            type:String,
            default:"",
        },
        region: {
            type:String,
            default:"",
        },
        start_year: {
            type:Number,
            default:"",
        },
        impact: {
            type:Number,
            default:"",
        },
        added: {
            type:String,
            default:"",
        },
        published: {
            month:{
                type:String,
                default:"",
            },
            date:{
                type:Date,
                default:Date.now(),
            },
        },
        // "published": "July, 04 2016 00:00:00",
        country: {
            type:String,
            default:"",
        },
        relevance: {
            type:Number,
            default:"",
        },
        pestle: {
            type:String,
            default:"",
        },
        source: {
            type:String,
            default:"",
        },
        title: {
            type:String,
            default:"",
        },
        likelihood: {
            type:Number,
            default:"",
        }
});

module.exports = mongoose.model("Product",productSchema);