//CRUD create read update and delete

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to the database');
    }

    const db = client.db(databaseName);

// db.collection('users').updateOne({
//         _id: new ObjectID("60693d6206380d3224613b27"),
//     }, {
//         $inc: {
//             age: 1
//         }
//     }).then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log(error);
//     })

db.collection('tasks').updateMany({
    completed: false,
}, {
    $set: {
        completed: true
    }
}).then(result => {
    console.log(result);
}).catch(e => {
    console.log(e);
})

});