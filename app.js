const express = require('express');
const { dirname } = require('path');
const path=require('path');
const app = express();
const rutaAbsoluta='./views/';
app.use(express.static('public'))
//console.log(app);
app.get('/', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'index.html');
    res.sendFile(htmlPath)
})

app.get('/lovelace', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'lovelace.html');
    res.sendFile(htmlPath);
})

app.get('/turing', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'turing.html');
    res.sendFile(htmlPath);
})
app.get('/berners-lee', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'berners-lee.html');
    res.sendFile(htmlPath);
})
app.get('/babbage', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'babbage.html');
    res.sendFile(htmlPath);
})
app.get('/clarke', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'clarke.html');
    res.sendFile(htmlPath);
})
app.get('/clarke', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'clarke.html');
    res.sendFile(htmlPath);
})
app.get('/hamilton', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'hamilton.html');
    res.sendFile(htmlPath);
})
app.get('/hopper', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'hopper.html');
    res.sendFile(htmlPath);
})
app.listen(4100,()=>console.log("El servidor esta corriendo"))