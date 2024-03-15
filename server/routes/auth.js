const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
    console.log("Inside Backend register part");
    res.json({ "successful": true });
});

module.exports = router