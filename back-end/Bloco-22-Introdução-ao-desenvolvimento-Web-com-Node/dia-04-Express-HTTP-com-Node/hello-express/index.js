const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', function (_req, res) {
  const emOrdem1 = recipes.sort(function (a, b) {
    return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
  });

  res.json(emOrdem1);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) =>
      r.name.includes(name) &&
      r.price < Number(maxPrice) &&
      r.price >= Number(minPrice)
  );

  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const emOrdem1 = recipes.sort(function (a, b) {
    return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
  });

  const { id } = req.params;
  const recipes2 = emOrdem1.find((r) => r.id === Number(id));

  if (!recipes2) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipes2);
});

app.get('/drinks', function (_req, res) {
  const emOrdem2 = drinks.sort(function (a, b) {
    return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
  });

  res.json(emOrdem2);
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));

  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', function (req, res) {
  const emOrdem2 = drinks.sort(function (a, b) {
    return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
  });

  const { id } = req.params;
  const drinks2 = emOrdem2.find((d) => d.id === Number(id));

  if (!drinks2) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drinks2);
});

app.listen(3001, () => {
  console.log('aplicação ouvindo na porta 3001');
});
