const curso =require("./controllers/curso");
const usuario =require("./controllers/usuarios");


const express = require("express");
const mongoose = require("mongoose");


mongoose.connect('mongodb+srv:', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(() => console.log("conectado a base de datos MongoDB..."))
  .catch(err => console.log("No se pudo conectar con la base de datos MongoDB..", err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use ('/api/usuarios',usuario);
app.use ('/api/curso',curso);


const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log('API REST está ejecutándose');
});