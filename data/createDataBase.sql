-- Création de la table "Promo"
CREATE TABLE Promo (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

-- Création de la table "Student"
CREATE TABLE Student (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  github_username VARCHAR(255),
  promo_id INT,
  FOREIGN KEY (promo_id) REFERENCES Promo (id)
);

-- Création de la table "Admin"
CREATE TABLE Admin (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  password VARCHAR(255)
);

-- Création de la table "Admin_Permission"
CREATE TABLE Admin_Permission (
  id SERIAL PRIMARY KEY,
  admin_id INT,
  permission_name VARCHAR(255),
  FOREIGN KEY (admin_id) REFERENCES Admin (id)
);
