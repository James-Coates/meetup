import React, { Component } from 'react';

class Alert extends Component {
  
  constructor(props) {
    super(props);
    this.color = null;
    this.background = null;
  }

  getStyle = () => {
    return({color: this.color, background: this.background})
  }

  render() {
    if(!this.props.text) return <div className="my-alert" />
    return (
      <div className="alert">
        <p style={this.getStyle()}>{ this.props.text }</p>
      </div>
    )
  }

}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#919191';
    this.background = '#e3e3e3';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#8a0c0c';
    this.background = '#ffd1d1';
  }
}

export { InfoAlert, ErrorAlert };