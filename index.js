import express from "express";









// create an express app
const eventApp = express();

//listen for an incoming request
eventApp.listen(7070, () => {
    console.log('listening on port 7070');
});
