// server.js
//nwww add
const express = require('express');

const path = require('path');  

const app = express();

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'./dist/basic-assignment-start/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 8080);
/*var port = process.env.PORT || 8000

server.listen(port, function() {
    console.log("App is running on port " + port);
});*/