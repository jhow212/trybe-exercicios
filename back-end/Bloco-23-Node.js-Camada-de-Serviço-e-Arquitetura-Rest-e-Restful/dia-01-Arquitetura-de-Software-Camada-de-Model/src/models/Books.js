const db = require('./connections');
const Author = require('./Author');

const getAllBooks = async () => {
  const [books] = await db.execute(
    'SELECT id, title, author_id AS authorId FROM model_example.books'
  );

  return books;
};

const findIdBooks = async (id) => {
  const [[bookData]] = await db.query(
    'SELECT id, title, author_id AS authorId FROM model_example.books WHERE id=?',
    [id]
  );

  if (bookData === undefined) return null;

  return bookData;
};

const isValidBook = async (title, author_id) => {
  const authorId = await Author.findId(author_id);

  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!author_id || typeof author_id !== 'number' || !authorId) return false;

  return true;
};

const createBooks = async (title, authorId) => {
  db.query('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [
    title,
    authorId,
  ]);
};

module.exports = {
  getAllBooks,
  findIdBooks,
  isValidBook,
  createBooks,
};
