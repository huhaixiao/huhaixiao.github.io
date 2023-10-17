# DataBase

- `SQL`
    - is a query language to operate on sets.
    - It is more or less standardized, and used by almost all relational database management systems: SQL Server, Oracle, MySQL, PostgreSQL, DB2, Informix, etc.
- `PL/SQL`
    - is a proprietary procedural language used by Oracle
- `PL/pgSQL`
    - is a procedural language used by PostgreSQL
- `TSQL`
    - is a proprietary procedural language used by Microsoft in SQL Server
    - 

## MySQL

- MySQL Community Server - [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)
- MySQL Workbench - [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)
- mysql 不等于 会略过 NULL
- mysql 不要用 NULL
- mysql 中 null 做不等判断会返回空 `!=` 或者 `<>`

```sql
-- annotation
-- SELECT Statement
SELECT *
FROM table_name;

-- SELECT DISTINCT Statement
SELECT DISTINCT column1, column2
FROM table_name
-- 1=1 可以省略 WHERE 判断，方便增加 AND 条件
-- 数据库没有true的概念
WHERE 1=1;

SELECT t.name, t.age
FROM db.tb t
WHERE t.name REGEXP 'haixiao'
WHERE t.age IS NULL
WHERE t.name IS NOT NULL
ORDER BY t.age, t.birthday DESC
ORDER BY t.age ASC

```

```sql
USE sql_store;

-- ORDER BY clause
SELECT *
FROM sql_store.customers
ORDER BY first_name;

SELECT *
FROM sql_store.customers
ORDER BY first_name DESC;

SELECT *
FROM sql_store.customers
ORDER BY state, first_name DESC;

SELECT *
FROM sql_store.customers
ORDER BY state ASC, first_name DESC;

SELECT first_name, last_name, 10 AS points
FROM sql_store.customers
ORDER BY points, first_name;

SELECT first_name, state, 10 AS points
FROM sql_store.customers
-- sort by column position, should be avoided;
-- because select columns might be changed;
-- always sort by column names;
ORDER BY 2, 1 DESC;

SELECT *, quantity * unit_price AS total_price
FROM sql_store.order_items
WHERE order_id = 2
ORDER BY total_price DESC;

-- LIMIT clause
SELECT *
FROM sql_store.customers
LIMIT 3;-- LIMIT always comes at the end.

-- page 1: 1 - 3
-- page 2: 4 - 6
-- page 3: 7 - 9
SELECT *
FROM sql_store.customers
-- LIMIT offset, limit;
LIMIT 6, 3;

```

```sql
SELECT *
FROM orders
-- INNER JOIN, INNER is optional
INNER JOIN customers 
	ON orders.customer_id = customers.customer_id

SELECT order_id, o.customer_id, first_name, last_name
-- o is an alias of orders
FROM orders o
-- INNER JOIN, INNER is optional
INNER JOIN customers c -- c is an alias of customers
	ON o.customer_id = c.customer_id

SELECT o.product_id, name AS product_name, quantity, o.unit_price
FROM sql_store.order_items o
INNER JOIN sql_store.products p
	ON o.product_id = p.product_id

-- Joining Across Databases
SELECT * 
FROM sql_store.order_items o
JOIN sql_inventory.products p
	ON o.product_id = p.product_id

-- Self join
SELECT 
e.employee_id,
e.first_name,
m.first_name AS manager
FROM sql_hr.employees e
JOIn sql_hr.employees m
ON e.reports_to = m.employee_id
```

```sql
UPDATE EventSignup es
SET istosmp='0', name='test'
WHERE id='b66aebe2-a665-48c5-943f-e4712a7d7623';
```

## Backlog

- what is tiaobanji
- navicat
- relational database
- primary key column
- ambiguous
- Database has tables
- Transact-SQL
- SQLite
- SQL Server
