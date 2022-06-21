SELECT COUNT(*) AS 'Quantidade de Clientes Ativos' FROM sakila.customer
WHERE active = 1 AND store_id = 1;