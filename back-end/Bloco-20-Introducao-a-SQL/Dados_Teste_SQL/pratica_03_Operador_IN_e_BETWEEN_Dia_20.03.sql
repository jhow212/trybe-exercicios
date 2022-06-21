USE sakila;
SELECT COUNT(*) AS 'Quantidade de Pagamentos' FROM payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';