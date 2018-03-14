
import React from 'react';
import Geolocation from './Geolocation'
// import MarkerPlace from './MarkerPlace'

import './index.css';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 0,
      lng: 0
    }
  }
  

  render() {
    console.log(window)
    
    return (
      <div id='app'>
      <Geolocation />
      {/* <MarkerPlace /> */}
      </div>
    ); 
  } 
};