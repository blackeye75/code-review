const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', require('./routes/ai.routes'));

module.exports = app;