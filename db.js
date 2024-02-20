// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const mongoose = require('mongoose');

//let database;

async function getDatabase(){
    // const client = await MongoClient.connect('mongodb://127.0.0.1:27017');

    // //creating a database 'library'
    // database = client.db('library');

    // if(!database){
    //     console.log("Database Not Connected");
    // }

    // return database

    mongoose.connect('mongodb://127.0.0.1:27017/library')
    .then(()=>{
        console.log('Database Connected')
    }).catch(()=>{
        console.log('Database Connection Error!')
    })
}

module.exports = {
    getDatabase,
    //ObjectID
}