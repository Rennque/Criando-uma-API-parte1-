const express = require('express');
const router = express.Router();

router.post('/newUser', (req, res) => {
    let user = 'Henrique'
    res.send(`O nome ${user} foi criado`);
});

router.delete('/newDelete', (req, res) => {
    let user = 'Henrique'
    res.send(`O nome ${user} foi deletado.`)
});


app.listen(3333 , () => {
    console.log("Servidor 100% Online")
});