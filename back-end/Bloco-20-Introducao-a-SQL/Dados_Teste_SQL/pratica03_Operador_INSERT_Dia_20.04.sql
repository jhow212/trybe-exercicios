USE sakila;
INSERT INTO actor (first_name,last_name)
	SELECT first_name, last_name FROM customer
    ORDER BY customer_id 
    LIMIT 5;