CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS usernames;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS rooms;

CREATE TABLE usernames (
  username_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  PRIMARY KEY (username_id)
);

CREATE TABLE messages (
  message_id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(100) NOT NULL,
  username_id INT,
  PRIMARY KEY (message_id)
);

CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(30) NOT NULL,
  PRIMARY KEY (room_id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
