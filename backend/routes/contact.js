const express = require("express");
const router = require("express").Router();
const contactController = require("../controllers/contact")

router.get("/", contactController.getAll)

module.exports = router;