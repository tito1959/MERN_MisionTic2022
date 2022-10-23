const mongoose = require('mongoose');

const host = 'localhost';
const port = '27017';
const db = 'hr';

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection)
        .then(() => console.log('Database Connected'));
    mongoose.Promise = global.Promise;

    const dbConnection = mongoose.connection;

    /**
    *  dbConnection.once('open', () => {
    *    console.log('Conectado a la base de datos.');
    *  }) 
    */

    dbConnection.on('error', console.error.bind(console, 'Mongodb connection error'));
};