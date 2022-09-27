const express   = require("express");
const nedb      = require("nedb");
const rest      = require("express-nedb-rest");
const cors      = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

const datastore = new nedb({
    filename: "mycoffeeapp.db",
    autoload: true
});

const restAPI = rest();
restAPI.addDatastore('coffees', datastore);

app.use('/', restAPI);

app.listen(3000);