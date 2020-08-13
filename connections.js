const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize("train_dog", "root", "ZXasqw12!@chubb", {
        host: "localhost",

        dialect: "mysql"
    });

sequelize.authenticate().catch(error => console.log(error))

sequelize.sync({ force: true }).then(function () {
   
});

module.exports = sequelize
