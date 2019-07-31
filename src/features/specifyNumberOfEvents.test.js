import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  // Scenario 1
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has not specified a number of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user browses through the event list', () => {
      AppWrapper.update();
    });

    then('32 events should be shown to the user.', () => {
      expect(AppWrapper.find('.event')).toHaveLength(32);
      AppWrapper.unmount();
    });
  });

  // Scenario 1
  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the events list is open', () => {
      AppWrapper = mount(<App />);
    });

    when('the user selects the number of events', () => {
      AppWrapper.find('.number-of-events .number').simulate('change', {target: {value: 10}});
    });

    then('the selected number of events should be shown to the user.', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event-list li')).toHaveLength(10);
    });
  });
});