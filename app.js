require('dotenv').config(); // Charge les variables d'environnement depuis .env
const express = require('express'); // Importe Express
const axios = require('axios'); // Importe Axios

const app = express();

const apiKey = process.env.TMDB_API_KEY; // Récupère la clé API depuis .env
const apiUrl = 'https://api.themoviedb.org/3'; // URL de base de l'API TMDb

// Route pour récupérer les films populaires
app.get('/movies', async (req, res) => {
    try {
        const response = await axios.get(`${apiUrl}/movie/popular`, {
            params: { api_key: apiKey }, // Passe la clé API en paramètre
        });
        res.json(response.data.results); // Retourne les résultats au client
    } catch (error) {
        res.status(500).send(error.message); // Gère les erreurs
    }
});

// Démarre le serveur
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
