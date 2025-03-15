const express = require('express');
const bodyParser = require('body-parser');
//import the database for assess
const mongodb = require("./database/connect");
const app = express();

const port = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
.use("/", require("./routes"));


//A function to initialize mongodb
mongodb.initDb((err) => { // Call the initDb function created in connect of databse folder
    if(err) {console.log(err);

    }
    else {
        //listen on the port set above and display the info in the route set
        app.listen(port, () => {
            console.log("Running on port", port);
        });
    }
})

