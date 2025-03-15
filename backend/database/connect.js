//Import the dotenv libraries
const dotenv = require("dotenv");
dotenv.config(); //An instance of dotenv method

//Import the mongodb client and require a method of mongodb inside
const MongoClient = require("mongodb").MongoClient;

//Hold the database in a variable called "database"
let database;

//Setting up the initDb function
const initDb = (callback) => {
    if (database) {//If database exist
        console.log("Database is already iniatilized");
        return callback(null, database);
    }
    //else connect to mongodb url and then return the request of the client or return error
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch ((err) => {
            callback(err);
        })
};

//get the database if initialized successfully
const getDatabase = () => {
    if (!database) { //not exit, throw error .... else return the data from the database
        throw Error("Database not initialized")
    }
    return database;
};


//Export the functions
module.exports = {initDb, getDatabase};

