import React from 'react';

import { connect } from 'react-redux';
import { fetchCountries } from '../actions/fetchCountries.js';
// import SelectComponent from './common/SelectComponent';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regions: [],
            country: [],
            selectedRegion: '',
            selectedCountry:''
        };
       
        
    }
    componentDidMount() {
        this.props.fetchCountries(this.props.Content.regions[0].name );
    }

    changeRegion(event) {
        
        var newRegion = event.target.value
		this.setState({selectedRegion: event.target.value});
        console.log(newRegion);
        // console.log(this.props.Countries);
        this.props.fetchCountries(newRegion);
    }
    render() {
     
        return (
            <div style={{alignContent:"center"}}>
                <h1>{this.props.Content.heading}</h1>
                <div className="dropdown">
                <label>Select Region </label>
                
                <select value={this.state.selectedRegion} onChange={(event)=> {this.changeRegion(event)}} >
                
                    {
                        this.props.Content.regions.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})
                    }
                </select>
                <br /> <br />             
                <label>Select Country </label>
                <select  >
               
                    {
                       this.props.countries.map((e,key)=>{
                            return <option key={key}>{e.name}</option>;
                        }
                        )
                    }
                </select>
              
                {/* <SelectComponent dropdown={this.props.countries}/> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.event.countries,
        error:state.event.error
    };
};
const mapDispatchProps = (dispatch) => ({
    fetchCountries: (region) => dispatch(fetchCountries(region))
});

export default connect(mapStateToProps, mapDispatchProps)(Dropdown);