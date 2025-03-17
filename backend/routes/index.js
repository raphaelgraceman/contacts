const router = require('express').Router();

const contactRoute = require('./contacts')

router.use('/', require('./swagger'));


router.get("/", (req, res) => {  
    //#swagger tags =['Hello World]
    res.send("Hello World");
});


//Adding a route to get contacts
router.use('/contacts', contactRoute);





module.exports = router;