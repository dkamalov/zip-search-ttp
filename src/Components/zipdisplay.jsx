import React, { Component } from 'react';
class zipdisplay extends Component {

    constructor(props) {
        this.state = {
            zipcodes : [],
            cities : [],
        };
    }

    componentDidMount(){
        fetch('http://ctp-zip-api.herokuapp.com/city/:cityname')
        .then((response) => response.json())
        .then((response) => {this.setstate({cities: response.results})
        })
        .catch((error) => console.error(error));
    }

    render() {
        return (
            <div>
                {this.state.cities.map((citiy,index)=> {
                    return (
                        <
                    )
                })}
                   
            </div>
        )
    }

}

export default zipdisplay