const mongodb = require("../database/connect");

//require the unique mongodb id for the contact data database
const ObjectId = require("mongodb").ObjectId

//getAll contact data function
const getAll = async(req, res) => {
    const result = await mongodb.getDatabase().db().collection("contacts").find();
    result.toArray().then((contacts) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts);
    });
};

//getSingle contact form database
const getSingle = async(req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection("contacts").find({ _id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts[0]);
    });
};


module.exports = {getAll, getSingle};