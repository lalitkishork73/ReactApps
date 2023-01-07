const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search"
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': proccess.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    try {
        await axios.get(`${BASE_URL}/${url}  `
    } catch (err) { }
}