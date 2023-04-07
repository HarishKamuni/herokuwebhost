const model = require("../models/products")

const getAllProducts = async(req,res)=>{
    const {sector,topic,likelihood,sort,select} = req.query;
    const queryObject = {}
    if(sector){
        queryObject.sector = {$regex:sector,$options:"i"};
    }
    if(topic){
        queryObject.topic = {$regex:topic,$options:"i"};
    }
    if(likelihood){
        queryObject.likelihood = likelihood;
    }
    console.log(queryObject)
    let apiData = model.find(queryObject);
    if(sort){
        // let sortFix = sort.replace(","," ");
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix)
    }
    if(select){
        // let sortFix = sort.replace(","," ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1)*limit;

    apiData = apiData.skip(skip).limit(limit);
    
    const mydata = await apiData;
    res.status(200).json({mydata, nbHits:mydata.length})
}

const getAllProductsTesting = async(req,res)=>{
    const mydata = await model.find(req.query).sort("-topic");
    res.status(200).json(mydata)
}

module.exports = {getAllProducts,getAllProductsTesting}