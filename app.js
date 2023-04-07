const express = require("express")
const app = express();
require("dotenv").config();
const Products_Route = require("./routes/Products")
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("Hi, I am using a server")
})

app.use("/api/products",Products_Route);

const starts = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,"127.0.0.1",()=>{
            console.log(`${PORT} yes I am connected`)
        })
    } catch (error) {
        console.log(error)
    }
}
starts();

