const express = require("express");
const router = require("express").Router();
const contactController = require("../controllers/contacts")


//Route to get All contacts
router.get("/", contactController.getAll)

// New route for a single contact
router.get('/:id', contactController.getSingle);

//Route to post / Create New contact
router.post('/', contactController.createContact);

//Route to update contact
router.put('/:id', contactController.updateContact);

//Route to delete contact
router.delete('/:id', contactController.deleteContact);

module.exports = router;