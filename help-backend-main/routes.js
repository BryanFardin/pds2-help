const express = require('express');
const route = express.Router();


const loginController = require('./src/controllers/loginController.js');
const registerController = require('./src/controllers/registerController.js');


// Rota para obter os usuários
route.get('/login', (req, res) => {
    loginController.login
    // Lógica para obter os usuários
    res.send('Rota para obter os usuários');
});
  
// Rota para registrar os usuários
route.get('/register', (req, res) => {
    registerController.register
    // Lógica para registrar os usuário
    res.send('Rota para registrar os usuários');
});
  


module.exports = route;