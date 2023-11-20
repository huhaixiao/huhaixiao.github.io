# sql

By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.


```sql
-- 检查数据库密码策略
SHOW VARIABLES LIKE 'validate_password%';

-- 检查数据库对不同用户使用的身份验证方法
SELECT user,authentication_string,plugin,host FROM mysql.user;

-- 设置root 密码 new_password 1qaz2wsx
ALTER USER 'root'@'localhost' IDENTIFIED BY '1qaz2wsx';

COMMIT;

FLUSH PRIVILEGES;

-- ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1qaz2wsx';  

COMMIT;

FLUSH PRIVILEGES;

-- mysql 选择数据库
CREATE DATABASE my_database;
CREATE DATABASE user_db;
USE my_database;

-- mysql create 一个 table

-- id：用作唯一标识符的自增整数。
-- username：用于存储用户名的字符串，最大长度为255个字符，不能为空。
-- password：用于存储密码的字符串，最大长度为255个字符，不能为空。
-- email：用于存储电子邮件地址的字符串，最大长度为255个字符，不能为空。
-- created_at：用于记录创建时间的时间戳，如果未提供值，则默认为当前时间戳。
CREATE TABLE users (  
  id INT PRIMARY KEY AUTO_INCREMENT,  
  username VARCHAR(255) NOT NULL,  
  password VARCHAR(255) NOT NULL,  
  email VARCHAR(255) NOT NULL,  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);

quit;
```
