const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CONECT);
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error("Error al inicializar la DB");
    }
}

module.exports = {
    dbConnection
}