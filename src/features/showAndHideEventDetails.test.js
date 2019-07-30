import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';

const feature = loadFeature('./src/features/showAndHideEventDetails.feature');

defineFeature(feature, test => {

  // Scenario 1
  test('By default an event element should be collapsed', ({ given, when, then }) => {
    let EventWrapper;
    given('no event element is selected', () => {
      EventWrapper = shallow(<Event event={{}}/>);
    });

    when('the user browses through the event list', () => {
    });

    then('the event element should be collapsed to show the list of events to the user.', () => {
      expect(EventWrapper.find('.modal')).toHaveLength(0);
    });
  });

  // Scenario 2
  test('A user should be able to expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
    given('the event list is open', () => {
      EventWrapper = shallow(<Event event={{}}/>);
    });

    when('the user clicks on the event', () => {
      EventWrapper.find('.event .details-btn').simulate('click');
    });

    then('the user should receive the expanded event details.', () => {
      expect(EventWrapper.find('.modal-on')).toHaveLength(1);
    });
  });

  // Scenario 3
  test('A user should be able to collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    given('an event element is expanded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user closes the element', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
      AppWrapper.find('.modal .close').simulate('click');
    });

    then('the selected event element should collapse to show the user the list of events.', () => {
      expect(AppWrapper.find('.modal-open')).toHaveLength(0);
    });
  });
});