require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.TMDB_API_KEY;
const apiUrl = 'https://api.themoviedb.org/3';

const fetchMovies = async () => {
    try {
        const response = await axios.get(`${apiUrl}/movie/popular`, {
            params: { api_key: apiKey }
        });
        console.log(response.data.results);
    } catch (error) {
        console.error(error.message);
    }
};

fetchMovies();
