const express = require("express");
const cors = require('cors')
const app = express(); 

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {

    res.status(200).send("Engine Started, Ready to take off!");

})

//configuring dotenv file
require("./configs/dotenv");
const client = require("./configs/database");

client.connect((err) => { //Connected Database

    if (err) {

        console.log(err);

    } else {

        console.log("Data logging initiated!");
    }

});

//routes to user.js
const api = require("./routes/user");

app.use("/api", api); //Route for /api endpoint of API

//express....
app.listen(port, () => {

    console.log(`Here we go, Engines started at ${port}.`);

})