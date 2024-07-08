import express from "express";
import { dbConnection } from "./config/db.js";

// create an express app
const eventApp = express();

// Create database connection
dbConnection();

//listen for an incoming request
eventApp.listen(7070, () => {
    console.log('listening on port 7070');
});
