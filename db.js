const mysql = require('mysql2');
require('dotenv').config();
const dotenv = process.env;

// Configuration de la connexion
const pool = mysql.createPool({
    host: dotenv.DB_HOST, // Adresse de l'hôte
    user: dotenv.DB_USER,      // Nom d'utilisateur
    password: dotenv.DB_PASSWORD, // Mot de passe
    database: dotenv.DB_NAME // Nom de la base
});

// Exporter la connexion pour réutilisation
module.exports = pool.promise();
