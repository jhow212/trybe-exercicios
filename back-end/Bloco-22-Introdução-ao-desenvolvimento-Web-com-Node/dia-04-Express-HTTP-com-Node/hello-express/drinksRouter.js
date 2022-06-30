const express = require('express');
const routerDrinks = express.Router();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

/** @type {import('express').RequestHandler} */
routerDrinks.get('/', function (_req, res) {
  const emOrdem2 = drinks.sort(function (a, b) {
    return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
  });

  res.json(emOrdem2);
});

routerDrinks.get('/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));

  res.status(200).json(filteredDrinks);
});

routerDrinks.get('/:id', (req, res) => {
  const emOrdem2 = drinks.sort(function (a, b) {
    return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
  });

  const { id } = req.params;
  const drinks2 = emOrdem2.find((d) => d.id === Number(id));

  if (!drinks2) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drinks2);
});

module.exports = routerDrinks;
