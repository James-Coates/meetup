import React, { Component } from 'react';
import { Card, Modal, Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


class Event extends Component {

  state = {
    details: '',
    show: false
  }

  handleShow = () => {
    this.setState({show: true});
  }

  handleClose = () => {
    this.setState({show: false});
  }

  render() {

    const { event } = this.props;

    const time = event.local_time;
    const date = event.local_date;
    const name = event.name;
    const groupName = event && event.group ? event.group.name : '';
    const rsvp = event.yes_rsvp_count;
    const rsvpLeft = event.rsvp_limit - event.yes_rsvp_count;
    const pieData = [{ name: 'going', value: rsvp }, { name: 'limit', value: rsvpLeft }]
    const description = event.description;
    const colors = ['#5BC0BE', '#f8f8f8'];

    return(
      <Card className={this.state.show ? 'event modal-on' : 'event'} >
        <Card.Body onClick={this.handleShow}>
          <Card.Subtitle className="text-muted">{ time } - { date }</Card.Subtitle>
          <Card.Title>{ name }</Card.Title>
          <Card.Text>Group: { groupName }</Card.Text>
          <Row className="rsvp-box">
            {rsvpLeft ? (
            <Col className="rsvp-chart" xs={2}>
              
              <ResponsiveContainer height={75}>
              <PieChart height={80}>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" >
                  {
                    pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]}/>
                    ))
                  }
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            </Col>
            ) : <div></div>}
            <Col xs={10} >
              <Card.Text className="rsvp">{ rsvp } going</Card.Text>
              <Card.Text className="text-muted">{ rsvpLeft ? `out of ${rsvpLeft}` : '' }</Card.Text>
            </Col>
          </Row>
        </Card.Body>
        
        <Modal 
          show={this.state.show} 
          onHide={this.handleClose}
          dialogClassName="modal-90w"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <div className="event-details__header">
              <p className="event-details__date">{ date }</p>
              <Modal.Title className="event-details__name">{ name }</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <img className="event-details__img" src='https://placehold.it/300x300' alt=''/>
            <p>Details</p>
            {description ? parse(description) : ''}        
          </Modal.Body>
        </Modal>
      </Card>
    )
  }
}

export default Event;