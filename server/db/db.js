const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/mern-auth";

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("DB connection failed");
        process.exit(1);
    }
};
module.exports = connectDB;
