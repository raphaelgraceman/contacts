const express = require("express");
const router = require("express").Router();
 

//router.get("/", (res, req) =>{    res.setEncoding(console.log("Hello World"))} );


//Adding a route to get contacts
router.use("/contact", require("./contact"));

module.exports = router;