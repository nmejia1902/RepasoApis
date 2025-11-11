const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

app.get('/productos',(req,res)=>{
    
    res.json({"id":1,"nombre":"laptop","precio":1200});
});

app.get('/usuarios',(req,res)=>{
    
    res.json({"id":1,"nombre":"Nestor","email":"nestor@gmail.com"});
});

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});