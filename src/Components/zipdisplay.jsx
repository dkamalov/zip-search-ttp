import React, { Component } from "react";
import axios from "axios";
import Citiesinfo from "./citiesinfo";

class Zipdisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInfo: [],
      zip: '',
      resultsFound: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      zip: e.target.value,
    });
  }

  async componentDidMount() {
      
        const response = await axios.get(`https://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`) 
        this.setState({locationInfo: response.data, resultsFound: true });
      
  }

  render() {
    return (

      <div>
        <input type="text" value={this.state.zip} onChange={this.handleInputChange}></input>
        <button onClick={this.componentDidMount}>Search</button>

          <div>
            {this.state.locationInfo.map((loc, index) => (

              <Citiesinfo
              key = {index}
              city = {loc.City} 
              pop = {loc.EstimatedPopulation}
              long = {loc.Long}
              lat = {loc.Lat}
              wage = {loc.TotalWages}
              zip = {loc.Zipcode}

          />
        ))}
           </div>
      </div>
    );
  }
}

export default Zipdisplay;