import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {

  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  })

  test('render number of events input with default of 32', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe('32');
  })

  test('change state when number of events changes', () => {
    const eventObject = { target: { value: '16' } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('number')).toBe('16');
  })

})