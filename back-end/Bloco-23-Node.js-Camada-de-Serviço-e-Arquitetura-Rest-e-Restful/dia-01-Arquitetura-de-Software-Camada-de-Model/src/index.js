const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findId(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name))
    return res.status(400).json({ message: 'Dados inválidos' });

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Author criado com sucesso!' });
});

app.get('/books', async (req, res) => {
  const books = await Books.getAllBooks();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.findIdBooks(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Books.isValidBook(title, author_id))
    return res.status(400).json({ message: 'Dados inválidos' });

  await Books.createBooks(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.listen(3000, () => {
  console.log('To rodando lisinho na porta 3000');
});
