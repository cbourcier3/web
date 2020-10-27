const { json } = require('body-parser');
const express = require('express');
const app = express();
var port = '8080';

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/test";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    if (db.isConnected()) console.log("Connecté à la database");
    else console.log("Non connecté");

});

app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)

});

app.get('/personnes', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("personne").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});

app.get('/personnes/:id', (req, res) => {
    var o_id = new mongo.ObjectId(req.params.id);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("personne").findOne({ _id: o_id }, function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});

app.post('/personnes', (req, res) => {
    var json_response = req.body;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var myobj = json_response;
        dbo.collection("personne").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });
        db.close();
        res.send(req.body + " is inserted");
    });
});

app.delete('/personnes/:id', (req, res) => {
    var o_id = new mongo.ObjectId(req.params.id);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("personne").deleteOne({ _id: o_id }, function (err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            res.send(req.params.id + " is deleted");
            db.close();
        });
    });
});

app.put('/personnes/:id', (req, res) => {
    var newvalues = { $set : req.body} ;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var o_id = new mongo.ObjectId(req.params.id);
        var dbo = db.db("test");
        dbo.collection("personne").updateOne({ _id: o_id }, newvalues, (err, res) =>{
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
        res.send(req.params.id + " has been updated");
    });
});