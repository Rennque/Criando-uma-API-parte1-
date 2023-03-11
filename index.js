const express = require('express');
const router = express.Router();

router.post('/newUser', (req, res) => {
    let user = 'Henrique'
    res.send(`O nome ${user} foi criado`);
});

router.delete('/user', function (req, res, next) {
    if(req.body.id == undefined){
      res.status(404).json({message: "Error, not id in body"});
    }
    next();
  }, function (req, res) {
    res.send('User deleted!');
  });
  


app.listen(3333, () => {
    console.log("Servidor 100% Online")
});