import express from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

// config da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// config de rotas
app.use(usersRoute);
app.use(statusRoute);

// inicialização do servidor
app.listen(3000, () => {
  console.log('Rodando na porta 3000!');
});