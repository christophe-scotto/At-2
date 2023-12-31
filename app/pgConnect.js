//pour pouvoir utiliser les variables d'environnement
require('dotenv').config();

const { Pool } = require('pg');

// Configuration de la connexion à la base de données
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  module.exports = pool;