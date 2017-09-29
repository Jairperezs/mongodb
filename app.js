const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient
const co = require('co')
const assert = require('assert')

co(function*(){
    // Connection URL
    const db =  yield MongoClient.connect('mongodb://jairperezs:D1e560*9c@proschool-shard-00-00-ahjmk.mongodb.net:27017,proschool-shard-00-01-ahjmk.mongodb.net:27017,proschool-shard-00-02-ahjmk.mongodb.net:27017/test?ssl=true&replicaSet=Proschool-shard-0&authSource=admin');
    console.log("Connected correctly to server")

    // Get collection 
    const col = db.collection('documents')
    
    // Find documents
    const cursor = yield col.find({a: 3}).limit(2).toArray()
    
    // Close the connection
    db.close()
}).catch(err => console.log(err.stack))

app.listen(3000)