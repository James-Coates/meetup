import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    number: 32
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      number: value
    })
  }

  render() {
    return(
      <div className="number-of-events">
        <input className="number" type="number" value={this.state.number} onChange={this.handleChange} />
      </div>
    )
  }

}

export default NumberOfEvents;