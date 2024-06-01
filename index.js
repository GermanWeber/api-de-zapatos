const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;



const {getZapatos , getZapatosById , getZapatosByMarca} = require("./controllers/zapatos.controller");

app.use(cors());

app.get("/" , getZapatos );

app.get("/id/:id" , getZapatosById );

app.get("/marca/:marca" , getZapatosByMarca );

"localhost"


app.listen(puerto, ()=>{
    console.log("Hola, esta bien el trabajo");
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
})