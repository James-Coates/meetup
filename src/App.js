import React, { Component, useState } from 'react';
import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
import EventChart from './EventChart';
import { InfoAlert } from './Alert';
import { getEvents } from './api';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';


class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    city: {},
    alert: '',
    chartOpen: false
  };

  componentDidMount() {
    this._isMounted = true;
    if (!navigator.onLine) {
      this.setState({alert: 'Note: The app is offline, information shown may not be up to date'});
    } else {
      this.setState({alert: ''});
    };
    this.updateEvents(undefined, undefined, 32);
  };

  updateEvents = (lat, lon, page) => {
    getEvents(lat, lon, page).then(data => {
      if (this._isMounted) {
        const {city, events} = data;
        this.setState({city, events});
      }
    });
  };

  toggleChart = () => {
    console.log(this.state.chartOpen);
    this.setState({ chartOpen: !this.state.chartOpen });
  }

  componentWillUnmount() {
    this._isMounted = false;
  };
  
  render() {
    return (
      <div className="App">
        <Header />
        <Container className="main" id="main">
          <Row className="filter-container">
            <Col xs={12} md={8} className="search-bar__box">
              <CitySearch updateEvents={this.updateEvents}/>
              { this.state.alert ? <InfoAlert text={this.state.alert} /> : '' }
            </Col>
            <Col className="toggleButton-box" xs={12} md={4}>
              <Button 
                className="btn-2"
                onClick={this.toggleChart}
                aria-controls="event-chart"
                aria-expanded={this.state.chartOpen}
              >
                Events this week &rarr;
              </Button>
            </Col>
          </Row>
          <Collapse in={this.state.chartOpen}>
            <div id="event-chart">
              <EventChart events={this.state.events}/>
            </div>
          </Collapse>
          <EventList events={this.state.events} />
          <NumberOfEvents updateEvents={this.updateEvents}/>
        </Container>
      </div>
    );
  } 
};

export default App;
