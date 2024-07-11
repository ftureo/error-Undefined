
const mongoose = require('mongoose');

const dbConection = async() => {
    try {
      await mongoose.connect(process.env.DBCONECT);
      console.log('DB CONECTADA CORRECTAMENTE');
    } catch (error) {
      console.log(error);
    }
};

module.exports = dbConection