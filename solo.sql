
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    firstName varchar NOT NULL,
    lastName varchar NOT NULL,
    email varchar PRIMARY KEY,
    pwd varchar NOT NULL
);

CREATE TABLE images(
    _id serial PRIMARY KEY,
    imageName varchar NOT NULL,
    text varchar NOT NULL,
    email_fk varchar NOT NULL,
    FOREIGN KEY (email_fk) 
        REFERENCES users(email)
);

insert into users (firstName, lastName, email, pwd) values ('Anthony', 'Martinez','anthony@amartinez.cc', 'temp');
insert into users (firstName, lastName, email, pwd) values  ('Jessica', 'Martinez','jessica@amartinez.cc', 'temp');
insert into users (firstName, lastName, email, pwd) values  ('Jillian', 'Martinez','jillian@amartinez.cc', 'temp');
insert into users (firstName, lastName, email, pwd) values  ('Archer', 'Martinez','archer@amartinez.cc', 'temp');

insert into images (_id, imageName, text, email_fk) values (DEFAULT, 'first pic', 'data', 'anthony@amartinez.cc');
insert into images (_id, imageName, text, email_fk) values (DEFAULT, 'second post', 'data', 'anthony@amartinez.cc');
