const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Testando média', () => {
  describe('Quando a média for menor que 7', () => {
    it('Retorna "reprovado"', () => {
      const resposta = calculaSituacao(4);

      expect(resposta).to.be.equals('reprovacao');
    });
  });

  describe('Quando a média for maior que 7', () => {
    it('Retorna "aprovado"', () => {
      const resposta = calculaSituacao(9);

      expect(resposta).to.be.equals('aprovacao');
    });
  });

  describe('Quando a média for igual a 7', () => {
    it('Retorna "aprovado"', () => {
      const resposta = calculaSituacao(7);

      expect(resposta).to.be.equals('aprovacao');
    });
  });
});
