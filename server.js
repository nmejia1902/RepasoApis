const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

app.get('/productos',(req,res)=>{
    
    res.json({""});
});

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});