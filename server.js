const express = require("express");
const expresshandlebars = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', expresshandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

const dog = require('./Models/Dog');
const path = require('path');




  app.use('/', express.static(__dirname + '/Views')); //translate static file requests from /log into /docs for showing documentation site.

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.post('/newDog', (req, res) => {
    console.log(req.body);
    dog.create(req.body).then(Dog => {
      res.json(Dog);
    });
  });

  app.get('/newDog', (req, res) => {
    dog.findAll({
      include: [dog]
    }).then(Dog => {
      res.json(Dog);
    });
  });



  module.exports = app;

  
