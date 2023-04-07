require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./models/products");
const productjson = require("./jsondata.json")

const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await product.deleteMany()
        await product.create(productjson)
        console.log("success")
    } catch (error) {
        console.log(error);
    }

}
start()