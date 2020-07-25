CREATE DATABASE telegram;

use telegram;

CREATE TABLE user(
    id VARCHAR(32),
    username VARCHAR(32),
    name VARCHAR(64)
);

INSERT INTO `user`(`id`,`username`,`name`)
VALUES ('123','cristian','cristian');

CREATE TABLE auth(
    id VARCHAR(32),
    username VARCHAR(32),
    password VARCHAR(64)
);

CREATE USER 'ec2-user'@'localhost' IDENTIFIED BY 'ec2pass';

GRANT ALL PRIVILEGES ON *.* TO 'ec2-user'@'localhost' WITH GRANT OPTION;

CREATE USER 'ec2-user'@'%' IDENTIFIED BY 'ec2pass';

GRANT ALL PRIVILEGES ON *.* TO 'ec2-user'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;

ALTER USER 'ec2-user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ec2pass';
ALTER USER 'ec2-user'@'%' IDENTIFIED WITH mysql_native_password BY 'ec2pass';