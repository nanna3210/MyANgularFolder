var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

console.log(mongoClient);

var connectionString = "mongodb://127.0.0.1/27107";
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
console.log("nanna");
app.get("/getusers", function (request, resonse) {
    mongoClient.connect(connectionString, function (err, clientObject) {
        if (!err) {
            var dbo = clientObject.db("demodb");
            console.log(dbo);
            dbo.collection('tblUsers').find().toArray(function (err, documents) {
                if (!err) {
                    express.response.send(documents);
                }
            })
        }
    })
}
);
app.listen(8081);
console.log('server started  at port 8080');