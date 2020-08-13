const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const PORT = process.env.PORT || 3001;

const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize("train_dog", "root", "ZXasqw12!@chubb", {
        host: "localhost",

        dialect: "mysql"
    });

sequelize.authenticate().catch(error => console.log(error))

sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

module.exports = sequelize;

app.use('/', express.static(__dirname + '/Views')); //translate static file requests from /log into /docs for showing documentation site.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views/index.html'));
  });

