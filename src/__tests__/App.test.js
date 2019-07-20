import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';

describe('<App /> Component', () => {

  test('render list of events', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(EventList)).toHaveLength(1);
  })

});