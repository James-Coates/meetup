import React, { Component } from 'react';

class CitySearch extends Component {

  state = {
    query: 'Munich',
    suggestions: []
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      query: value
    })
  }

  handleSuggestionClick = (value) => {
    this.setState({
      query: value
    })
  }

  render(){
    return(
      <div className="city-search">
        <input type="text" className="city" value={this.state.query} onChange={this.handleInputChange}/>
        <ul className="suggestions">
          {this.state.suggestions.map(suggestion => 
            <li key={suggestion.name_string} onClick={() => this.handleSuggestionClick(suggestion.name_string)}>{suggestion.name_string}</li>
          )}
        </ul>
      </div>
    )
  }

}

export default CitySearch;