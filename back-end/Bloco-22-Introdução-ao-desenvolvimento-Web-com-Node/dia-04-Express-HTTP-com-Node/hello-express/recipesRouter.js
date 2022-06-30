const express = require('express');
const routerRecipes = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

/** @type {import('express').RequestHandler} */
const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '')
    return res.status(400).json({ message: 'Invalid data enter a name!' });

  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (!price || price === Number(0))
    return res.status(400).json({ message: 'Invalid data enter a price!' });

  next();
};

/** @type {import('express').RequestHandler} */
routerRecipes.get('/', (_req, res) => {
  const emOrdem1 = recipes.sort(function (a, b) {
    return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
  });

  res.json(emOrdem1);
});

routerRecipes.get('/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) =>
      r.name.includes(name) &&
      r.price < Number(maxPrice) &&
      r.price >= Number(minPrice)
  );

  res.status(200).json(filteredRecipes);
});

routerRecipes.get('/:id', (req, res) => {
  const emOrdem1 = recipes.sort(function (a, b) {
    return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
  });

  const { id } = req.params;
  const recipes2 = emOrdem1.find((r) => r.id === Number(id));

  if (!recipes2) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipes2);
});

routerRecipes.post('/', validateName, validatePrice, (req, res) => {
  const { id, name, price } = req.body;
  const { username } = req.user;

  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

routerRecipes.put('/:id', validateName, validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));
  if (recipeIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

routerRecipes.delete('/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = routerRecipes;
