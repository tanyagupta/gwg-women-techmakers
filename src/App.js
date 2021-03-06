import React, { Component } from 'react';
import MapContainer from './components/InitialMap';
import HeaderContainer from './components/Header'
//import Sidebar from './components/Sidebar';
import Search from './components/Search'
// import getPlaces from './services/googlePlaces';
import Container from './components/Places'
import Wiki from './components/Description'
import 'milligram';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      searchTerm: 'food',
      pos: {},
      query: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({query: event.target.value})
  }

  handleLocationChange = (pos) => {
    console.log('In App');
    console.log(pos);
    this.setState({
      pos
    })
  }

  handleSubmit() {
    this.setState({searchTerm: this.state.query })
    console.log("the submitted word")
    console.log(this.state.searchTerm)

  }


  handleLoad = (places) => {
    //console.log('In App');
    //console.log(places);
    this.setState({
      places
    })
  }

  updateCurrentCity = (currentCity) => {
    this.setState({ currentCity });
  }
 /* componentDidMount(){
    console.log("getPlaces")
     getPlaces(this.state.mapCenter.lat,this.state.mapCenter.lng,this.state.searchTerm).then((places) => {
        this.setState({ places })
    })
  }
*/

/* The original css style names "App container", "row", "column column-75", "column column-25" */
  render() {
    //  <Sidebar places={this.state.places}/>
    return (

      <div className="fullContainer">
        <HeaderContainer handleLocationChange={this.handleLocationChange} updateCurrentCity = {this.updateCurrentCity}/>
          <div className="contentContainer">
              <div className="searchContainer">
              <Search submit={this.handleSubmit} input={this.handleChange} />
              </div>
              <div className="mapContainer">
                    <div className="map">
                    <MapContainer pos={this.state.pos} searchTerm={this.state.searchTerm} {...this.state} onLoad={this.handleLoad} />
                    </div>
                    <div className="mapDescription">
                    {this.state.currentCity} Coordinates: {this.state.pos.lat}, {this.state.pos.lng}

                    <Wiki currentCity={this.state.currentCity}/>
                    </div>
                    <div className="mapPlaces">
                    <Container {...this.state} />
                    </div>
               </div>
           </div>
           <div className="footer"> footer </div>

      </div>
    );
  }
}

export default App;
