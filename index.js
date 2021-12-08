import express from 'express'
import rutas from './rutas/rutas.js'
import mongoose  from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PUERTO = 5000


mongoose.Promise= global.Promise
mongoose.connect("mongodb://localhost/gaticoCRM",
    {
        useNewUrlParser:true,
        useUnifiedTopology : true
    }
) 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())


rutas(app)
app.listen(PUERTO , ()=>{
    console.log(`servidor ejecutando  en puerto ${PUERTO}`)
})