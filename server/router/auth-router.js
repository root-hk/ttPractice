const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Hello Hemant");
});

router.get("/register", (req, res) => {
    res.status(200).send("Register Here");
});

module.exports = router;
