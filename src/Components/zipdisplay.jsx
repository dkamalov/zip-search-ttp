import React, { Component } from 'react'
import axios from 'axios'
import Citiesinfo from './citiesinfo'

class Zipdisplay extends Component {
    constructor (props) {
        super(props)

        this.state = {
            locationInfo : [],
            zipCode: '',
            zipFound: false
        }
    }

    async componentDidMount() {
        try {
            const locationInfo = await axios.get('http://ctp-zip-api.herokuapp.com/zip/10016')
            this.setState({locationInfo: locationInfo.data})
        }
        catch (error){
            console.error(error)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            zipCode: e.target.value
        })
    }


    render() {
        return (
            <div>
                <input type='text' value={this.state.zipCode} onChange={this.handleInputChange}/>
                {this.state.locationInfo.map((loc,index) => {
                    if (loc.Zipcode === this.state.zipCode) {
                     return (
                         <div>
                            <Citiesinfo
                                go = {this.state.zipFound}
                                city = {loc.City} 
                                key = {index}
                                state = {loc.State}
                                pop = {loc.EstimatedPopulation}
                                long = {loc.Long}
                                lat = {loc.Lat}
                                wage = {loc.TotalWages}
                                zip = {loc.Zipcode}
                            />
                        </div>
                        );
                    } else return null
            })}
            </div>
        )
    }
}

export default Zipdisplay