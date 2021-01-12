import React, { Component } from 'react'
import axios from 'axios'
import City from './City'
import Zip from './Zip'


class Zipdisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zipcodes: [],
            cities: [],
        }
    }

    async componentDidMount() {
        try {
            let zipcodes = await axios.get(
            'http://ctp-zip-api.herokuapp.com/zip/:zipcode'
            )
            this.setState({ zipcodes: zipcodes.data.results })
        }
        catch (error) {
            console.error(error)
        }
    }
    
    render() {
        return (
            <div>
                {this.state.zipcodes.map((zipcode, index) => {
                    return (
                        <Zip
                        key={index}
                        number={index+1}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Zipdisplay
