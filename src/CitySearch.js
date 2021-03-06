import React, { Component } from 'react';
import { getSuggestions } from './api.js';
import { InfoAlert } from './Alert';
import { Form } from 'react-bootstrap';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    infoText: ''
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClickOutside = () => {
    this.setState({suggestions: []});
  }

  handleClick = (event) => {
    if(this.node.contains(event.target)) {
      return;
    };
    this.handleClickOutside();
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({ query: value })
    getSuggestions(value)
      .then(suggestions => this.setState({suggestions}))
      .then(() => {
        if (this.state.query.length > 1 && !this.state.suggestions.length) {
          this.setState({
            infoText: 'We can not find the city you are looking for. Please try another city',
          });
        } else {
          this.setState({
            infoText: ''
          });
        }
      }
      );
  }

  handleSuggestionClick = (value, lat, lon) => {
    this.setState({query: value});
    this.props.updateEvents(lat, lon);
    this.setState({suggestions: []});
  }

  render() {
    return(
      <div className="city-search">
        <Form.Control 
          type="text" 
          className="search-bar__input" 
          value={this.state.query} 
          placeholder="City" 
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
        />
        <ul className="suggestions" ref={node => this.node =node}>
          {this.state.suggestions.map(suggestion => 
            <li key={suggestion.name_string} onClick={() => this.handleSuggestionClick(suggestion.name_string, suggestion.lat, suggestion.lon)}>{suggestion.name_string}</li>
          )}
        </ul>
        <InfoAlert text={this.state.infoText}/>
      </div>
    )
  }

}

export default CitySearch;