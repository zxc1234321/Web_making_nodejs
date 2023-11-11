const express = require('express')
const app = express();
/*
app.get('/main', function (req, res) {
    res.sendFile(__dirname+'/main.html');
});

app.get('/test', function (req, res) {
    res.sendFile(__dirname+'/test.html');
});
*/
const PORT = 8080;
app.listen(PORT, function () {
<<<<<<< HEAD
    console.log('Server Init');
=======
    console.log('Server Start')
>>>>>>> bd5c886022e1ead703b63a5f4184ea4bc4d54f5c
    console.log('Listening on port: ', PORT);
});