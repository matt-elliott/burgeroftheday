CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
  id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  devoured BOOLEAN DEFAULT false
);