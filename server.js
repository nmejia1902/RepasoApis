const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/categorias',(req,res)=>{
    res.json({"id":1, "nombre":"Electronica"});
});

app.get('/api/pedidos',(req,res)=>{
    res.json({"id":1, "usuario":"Juan", "Total":500});
});

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});