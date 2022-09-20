import React from 'react';
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

class LocationContainer extends React.Component {
  render() {
    return(
      <ul>
        { this.props.locations
            .map(place =>
          <LocationPanel
            location = {place}
            api_url = {api_url} />
          )
        }
      </ul>
      )
    }
  }

class LocationPanel extends React.Component {
  state = {
    place: []
  }

  componentDidMount() {
      axios.get(`${this.props.api_url}${this.props.location}`)
        .then(response => {
          this.setState({place : response.data  });
        });
  }

  render() {
    return(
      <li> { this.state.place.name } </li>
    );
  }
}

function App() {
  return (
    <LocationContainer locations={locations} api_url={api_url}/>
  );
}

export default App;
