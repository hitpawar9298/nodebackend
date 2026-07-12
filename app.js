const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); //Allows the request to continue to the next middleware in line. If we don't call next(), the request will be stuck in this middleware and won't proceed further.
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); //This will send a response to the client and end the request-response cycle. After this, no further middleware will be executed for this request.
});

app.listen(5000);
