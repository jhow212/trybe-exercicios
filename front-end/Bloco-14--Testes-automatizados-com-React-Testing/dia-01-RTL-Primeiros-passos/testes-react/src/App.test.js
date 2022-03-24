import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se tem um input na tela', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});
