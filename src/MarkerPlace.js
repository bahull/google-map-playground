// import React from 'react';

// import './index.css';

// export default class MarkerPlace extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       lat: 0,
//       lng: 0
//     }
//   }
//   componentDidMount() {
//     let map = new window.google.maps.Map(document.getElementById('map'), {
//       center: {lat: this.state.lat || -33.8688, lng: this.state.lng || 151.2195},
//       zoom: 13,
//       mapTypeId: 'roadmap',
//     });
//     navigator.geolocation.getCurrentPosition((location) => {
//       console.log(location.coords.latitude);
//       console.log(location.coords.longitude);
//       console.log(location.coords.accuracy);
//       this.setState({lat: location.coords.latitude, lng: location.coords.longitude})
//     })
//   }
//   componentDidUpdate(){
//     let map = new window.google.maps.Map(document.getElementById('map'), {
//       center: {lat: this.state.lat , lng: this.state.lng},
//       zoom: 13,
//       mapTypeId: 'roadmap',
//     });
//   }

//   render() {
   
//     console.log(window.google, 
//     )
//     return (
//       <div id='app'>
//         <div id='map' />
//       </div>
//     ); 
//   } 
// };