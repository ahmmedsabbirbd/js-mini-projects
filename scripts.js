import './style.css'
import { Weather } from './weather'

// console.log()
const apiKey = 'd6c3fa7a15384efc97073333232006';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

document.getElementById('submitButton').addEventListener('click', ()=> {
    Weather.handleSubmit(apiUrl)
});