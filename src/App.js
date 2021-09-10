import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const api_key = process.env.REACT_APP_WEATHER_API_KEY;
const api_url = `https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&zip=`;

const locations = [
  "26135,de", // Oldenburg, DE
  "43210,us", // Columbus, OH
  "80513,us", // Berthoud, CO 
  "49931,us" // Houghton, MI
];


/*
pseudocode:
* set up the locations we're going to care about
* for each location, and output a div-ish container for each
* fetch the current weather conditions for each location
*/

function fetch_location(zip) {
  axios.get(`${api_url}${zip}`).then(response =>
    console.log(response.data));
}

locations.forEach(place => {
  fetch_location(place);
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
