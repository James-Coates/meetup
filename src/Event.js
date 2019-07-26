import React, { Component } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';

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

    const date = event.local_date;
    const name = event.name;
    const groupName = event && event.group ? event.group.name : '';
    const rsvp = event.yes_rsvp_count;
    const description = event.description;
    const test = '<p>test</p> <p>test2<p/>'

    return(
      <div className="event">
        <p className="event-date">{ date }</p>
        <h3 className="event-name">{ name }</h3>
        <p className="event-group">{ groupName }</p>
        <p className="event-rsvp">{ rsvp }</p>
        <Button className="details-btn" onClick={this.handleShow}>Details</Button>
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
              <h3 className="event-details__name">{ name }</h3>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs="12" md="8">
                  Details
                  {description ? parse(description) : ''}
                </Col>
                <Col xs="12" md="4">
                  <img className="event-details__img" src='https://placehold.it/400x400' alt=''/>
                </Col>
              </Row>
            </Container>           
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Event;