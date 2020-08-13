const express = require("express");
const sequelize = require("sequelize");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes"));

sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize("train-dog", "root", "", {
        host: "localhost",
        port: 3001,
        dialect: "mysql"
    });

module.exports = sequelize;


// const express = require("express");
// const app = express();
// const path = require("path");
// const fs = require("fs");

// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.get(".views/index.html", function (req, res) {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/api/train-dog", function (req, res) {
//     fs.readFile(__dirname + "/trainDog_db.json", (err, data) => {
//         if (err) throw err;
//         const trainDog = JSON.parse(data);
//         for (var i = 0; i < trainDog.length; i++) {
//             trainDog[i].id = i;
//         };
//         res.json(trainDog);
//     });
// });

// app.post("/api/train-dog", function (req, res) {
//     let newDog = req.body;
//     fs.readFile(__dirname + "/trainDog_db.json", (err, data) => {
//         if (err) throw err;
//         const trainDog = JSON.parse(data);
//         trainDog.push(newDog);
//         fs.writeFile(__dirname + "/trainDog_db.json", JSON.stringify(trainDog), (err, data) => {
//             if (err) throw err;
//             res.json(newDog);
//         })
//     })
// });

// app.delete("/api/train-dog/:trainDogId", function (req, res) {
//     const id = req.params.trainDogId;
//     fs.readFile(__dirname + "/trainDog_db.json", (err, data) => {
//         if (err) throw err;
//         const trainDog = JSON.parse(data);
//         trainDog.splice(id, 1);
//         fs.writeFile(__dirname + "/trainDog_db.json", JSON.stringify(trainDog), (err, data) => {
//             if (err) throw err;
//             res.send("ok");
//         })
//     })
// });

// app.get("*", function (req, res) {
//     res.sendFile(__dirname + "/public/index.html");
// });

// app.listen(PORT);