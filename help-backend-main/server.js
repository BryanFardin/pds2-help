require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Conectando ao MongoDB (substitua 'sua_url_do_banco' pela sua string de conexão MongoDB)
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const routes = require('./routes');



app.use(express.json());

app.use(routes);


// Endpoint de Registro
app.post('/api/cadastrar', async (req, res) => {
  try {
    const { name, id, password } = req.body;

    // Realize validações e tratamento de erros aqui

    // Crie um novo usuário
    const usuarioNovo = new Usuario({
      name,
      id,
      password,
    });

    // Salve o usuário no banco de dados
    await usuarioNovo.save();

    res.status(200).json({ mensagem: 'Usuário cadastrado com sucesso.' });
  } catch (erro) {
    res.status(500).json({ erro: 'Ocorreu um erro ao cadastrar o usuário.' });
  }
});

// Iniciando o servidor
app.on('pronto', () => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log(`Acessar http://localhost:${PORT}`);
    });
})