import logo from './logo.svg';
import './App.css';

import axios from 'axios';

console.log("hello world");

const request = axios.get('https://api.openweathermap.org/data/2.5/weather?zip=43210,us&appid=224b7a38e454801d04793fddcdfa70e7')
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
