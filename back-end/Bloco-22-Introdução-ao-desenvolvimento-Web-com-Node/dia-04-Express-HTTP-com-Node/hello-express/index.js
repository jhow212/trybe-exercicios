const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');
const routerRecipes = require('./recipesRouter');
const routerDrinks = require('./drinksRouter');

const app = express();
app.use(bodyParser.json());

app.get('/open', (_req, res) => {
  res.send('open!');
});

app.use(authMiddleware);

app.use('/recipes', routerRecipes);

app.use('/drinks', routerDrinks);

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;

  if (token.length !== 16)
    return res.status(401).json({ message: 'Invalid Token!' });

  res.status(200).json({ message: 'Valid Token!' });
});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.listen(3001, () => {
  console.log('aplicação ouvindo na porta 3001');
});
