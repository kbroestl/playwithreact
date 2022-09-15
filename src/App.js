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
  state = {
    place_data: []
  };

  componentDidMount() {
    let pd = [];
   
    this.props.locations.forEach((location) => {
      axios.get(`${api_url}${location}`)
        .then(response => {
          pd.push( 
            <LocationPanel
              place={response.data}
              key={response.data.id} />
          )
        });
    });
    this.setState({place_data: pd});
  };

  render() {
    return(
      <ul>
        { this.state.place_data }
      </ul>
      )
    }
  }

class LocationPanel extends React.Component {
  render() {
    const place = this.props.place;
    return(
      <li> { place.name } </li>
    );
  }
}

function App() {
  return (
    <LocationContainer locations={locations} api_url={api_url}/>
  );
}

export default App;
