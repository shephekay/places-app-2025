const express = require('express');
const mongoose = require('mongoose');
const app = express();
//heroku creates a .env file for us. this line says either use their port, or 3000 if that doesnt exist
const PORT = process.env.PORT || 3000;
const db = mongoose.connection
const show = console.log


const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2' /* different from normal*/

mongoose.connect(MONGO_URI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true})
db.on('open', ()=> {show('Mongo works')})

//console log is not necessary b/c we're in development
app.listen(PORT, () => {
  show('listening, port whatever')
})