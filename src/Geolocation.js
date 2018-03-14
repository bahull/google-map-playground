import React from 'react';

import './index.css';


export default class Geolocation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        zoom: 13,
        maptype: 'roadmap'
      };
   
  }
  componentDidMount() {
    let markers = []
    let map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13,
        mapTypeId: 'roadmap',
      });
   
      const  placeMarkerAndPanTo= (latLng, map) => {
        
        var marker = new window.google.maps.Marker({
                    position: latLng,
                        map: map
        });
        markers.push(marker)
        map.panTo(latLng);

    }
      map.addListener('click', (e) => {
        console.log(e.latLng)
        if(markers.length < 1){
          placeMarkerAndPanTo(e.latLng, map);
        } else {
          deleteMarkers()
        }
      });

      map.addListener("dblclick", (e)=>{
        console.log("dbl cliced")
        deleteMarkers()
      })

const setMapOnAll = (map) =>  {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
const clearMarkers = () =>{
  setMapOnAll(null);
}

// Shows any markers currently in the array.
const showMarkers = () => {
 setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
const  deleteMarkers = () => {
  clearMarkers();
  markers = []
}
    }
  render() {
   
    console.log(this.state, "state")
    return (
      <div id='app'>
        <div id='map' />
        <div id='pac-container'>
  <input id='pac-input' type='text' placeholder='Enter a location' />
</div>
<button onClick={this.deleteMarkers}>Delete them</button>
<button onClick={()=>console.log("hello", () => console.log("no")) } />
      </div>
    ); 
  } 
};