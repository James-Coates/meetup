import React, { Component } from 'react';
import { getSuggestions } from './api.js'

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: []
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      query: value
    })
    getSuggestions(value).then(suggestions => this.setState({suggestions}));
  }

  handleSuggestionClick = (value, lat, lon) => {
    this.setState({query: value});
    this.props.updateEvents(lat, lon);
    this.setState({suggestions: []});
  }

  render(){
    return(
      <div className="city-search">
        <input type="text" className="city" value={this.state.query} placeholder="City" onChange={this.handleInputChange}/>
        <ul className="suggestions">
          {this.state.suggestions.map(suggestion => 
            <li key={suggestion.name_string} onClick={() => this.handleSuggestionClick(suggestion.name_string, suggestion.lat, suggestion.lon)}>{suggestion.name_string}</li>
          )}
        </ul>
      </div>
    )
  }

}

export default CitySearch;