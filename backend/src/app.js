const express = require('express');
const cors= require('cors');

const app = express()

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', require('./routes/ai.routes'));

module.exports = app;