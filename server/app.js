const express = require("express");
const app = express();
const dotenv = require("dotenv");
const BodyParser = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "./config/.env" });
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));
app.use(cors());

module.exports = app;