const express = require ('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requête reçue!');
    next();
    
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.send('Hello World');
    next(); 
});

app.use((req, res) => {
    console.log('Requête termинé!');
});


module.exports = app;