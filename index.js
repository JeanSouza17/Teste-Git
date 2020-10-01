const express = require('express');

const app = express();

<<<<<<< HEAD
app.get('/teste7', (req, res) => {
=======
app.get('/teste8', (req, res) => {
>>>>>>> master
    return res.json({ hello: 'world 2'})
});

app.listen(3333);