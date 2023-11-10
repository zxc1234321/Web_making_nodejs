const express   = require('express');
const app       = express();

//라우트 객체 생성
const mainRouter    = require('./routes/index');

//라우트 설정
app.use('/', mainRouter);

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});