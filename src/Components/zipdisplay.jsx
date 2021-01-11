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

}

export default zipDisplay