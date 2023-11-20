# cli

```shell
# check
mysql --version
# install mysql
sudo mysql_secure_installation
sudo mysql

# restart mysql
sudo service mysql restart
# checkout mysql config
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf

sudo service mysql start

# 未为mysql设置root 密码时，会直接登录成功
mysql -u root
```
