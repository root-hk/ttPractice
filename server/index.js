const express = require("express");
const router = require("./router/auth-router");
const connectDB = require("./db/db");

const app = express();
const port = 3000;

//This middleware is used to parse the incoming req bodies with json payloads. It is imp to place this before any routes that expect json payloads.
app.use(express.json());

//This middleware is used to mount the router in my main express app, it can mount a router at any point in the middleware stack by using the use() method.
app.use("/api/auth", router);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
