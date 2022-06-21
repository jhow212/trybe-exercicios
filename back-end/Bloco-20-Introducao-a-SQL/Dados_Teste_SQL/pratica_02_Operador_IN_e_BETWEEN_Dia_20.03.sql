USE sakila;
SELECT * FROM customer
WHERE last_name IN ('hicks','crawford','henry','boyd','manson','morales','kennedy')
ORDER BY first_name ;