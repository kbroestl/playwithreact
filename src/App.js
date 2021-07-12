import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const key = process.env.REACT_APP_WEATHER_API_KEY;

axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=43210,us&appid=${key}`)
.then(response => {
console.log(response.data.main.temp);
});

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
