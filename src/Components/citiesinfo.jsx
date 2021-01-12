import React from 'react'

const Citiesinfo = (props) => (
<div className = "container">
    <div className = "location">
        City: {props.city} <br/>
        Zipcode: {props.zip} <br/>
        wage: {props.wage} <br/>
        Population: {props.pop} 
    </div>

</div>

)

export default Citiesinfo