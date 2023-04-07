const mongoose = require("mongoose");

// uri = "mongodb+srv://HRK_21:vektahrk@cluster0.9r1rztc.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = (uri)=>{
    console.log("connect DB")
    return mongoose.connect(uri);
    
}

module.exports = connectDB;