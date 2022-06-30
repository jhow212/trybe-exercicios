const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const api = express();

api.get(
  '/:filename',
  rescue(async (req, res) => {
    const file = await fs.readFile(``)
  })
);
