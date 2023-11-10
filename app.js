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
    console.log('Listening on port: ', PORT);
});