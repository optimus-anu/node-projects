//CRUD create read update and delete

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to the database');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({name: 'Jen'}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to find the user');
    //     }

    //     console.log(user);
    // })
    
    // db.collection('users').find({age: 27}).toArray((error, users) => {
    //     if(error) {
    //         return console.log('Unable to fetch the users');
    //     }
    //     console.log(users);
    // })
    // db.collection('users').find({age: 27}).count((error, count) => {
    //     if(error) {
    //         return console.log('Unable to fetch the users');
    //     }
    //     console.log(count);
    // })

    db.collection('tasks').findOne({_id: new ObjectID("60697622e4c7bc0595cf54b5")}, (error, task) => {
        console.log(task);
    })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks);
    })

});