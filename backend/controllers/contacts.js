const mongodb = require("../database/connect");

//require the unique mongodb id for the contact data database
const ObjectId = require("mongodb").ObjectId

//getAll contact data function
const getAll = async(req, res) => {
    const result = await mongodb.getDatabase().db().collection("contact").find();
    result.toArray().then((contact) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contact);
    });
};

//getSingle contact form database
const getSingle = async(req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection("contact").find({ _id: contactId});
    result.toArray().then((contact) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contact[0]);
    });
};


module.exports = {getAll, getSingle};