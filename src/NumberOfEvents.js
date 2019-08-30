import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    number: 32,
    errorText: ''
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      number: value
    })
    this.props.updateEvents(undefined, undefined, value);

    if(value && value < 1) {
      return this.setState({errorText: 'Number of events should be at least 1'});
    } else {
      return this.setState({errorText: ''});
    }

  }

  getStyle = () => {
    return 
  }

  render() {
    return(
      <div className="number-of-events">
        <p>Events to show: </p>
        <input className="number" type="number" value={this.state.number} onChange={this.handleChange} />
        <ErrorAlert text={ this.state.errorText }/>
      </div>
    )
  }
}

export default NumberOfEvents;