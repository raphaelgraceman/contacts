const router = require('express').Router();

const contactRoute = require('./contacts')

//router.get("/", (res, req) =>{    res.setEncoding(console.log("Hello World"))} );


//Adding a route to get contacts
router.use('/contacts', contactRoute);





module.exports = router;