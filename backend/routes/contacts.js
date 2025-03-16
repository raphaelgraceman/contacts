const express = require("express");
const router = require("express").Router();
const contactController = require("../controllers/contacts")

router.get("/", contactController.getAll)


// New route for a single contact
router.get('/:id', contactController.getSingle);


module.exports = router;