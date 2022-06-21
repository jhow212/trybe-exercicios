USE sakila;
SELECT DATE(rental_date) AS DATA,
YEAR(rental_date) AS Ano,
MONTH(rental_date) AS Mês,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Horas,
MINUTE(rental_date) AS Minutos,
SECOND(rental_date) AS Segundos 
FROM rental
WHERE rental_id = 10330;
