'use strict'

// Module
const express = require('express')
const app = express();
const PORT = 3000

// Routing
const home = require('./routes/home');

// Setting App
app.set('veiws', './views');
app.set('view engine', 'ejs');

app.use('/', home); // => 미들웨어를 등록해주는 Method



app.listen(PORT, () => {
    console.log(`Server is Listening at ${PORT}`);
})

module.exports = app;