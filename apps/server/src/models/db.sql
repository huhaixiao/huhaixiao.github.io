SHOW DATABASES;

CREATE DATABASE user_db;

USE user_db;

SHOW TABLES;

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

INSERT INTO users (username, password, email) VALUES ('haixhu', '1qaz2wsx', 'haixhu@icloud.com');
