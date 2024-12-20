const express = require("express");
const router = require("./router/auth-router");

const app = express();
const port = 3000;

app.use("/api/auth", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
