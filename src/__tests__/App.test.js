import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import Event from '../Event';
import NumberOfEvents from '../NumberOfEvents';
import Header from '../Header';
import { mockEvents } from '../mock-events';
import { async } from 'q';

describe('<App /> component', () => {

  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  })

  test('render header component', () => {
    expect(AppWrapper.find(Header)).toHaveLength(1);
  })

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render number of events', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});

describe('<App /> integration', () => {
  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleSuggestionClick('value', 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents(1.1, 1.2);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({events: [{id: 1}, {id: 2}, {id: 3}]});
    expect(AppWrapper.find(Event)).toHaveLength(3);
    AppWrapper.unmount();
  });

  test('recieve correct number of events parameter on user change', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    NumberOfEventsWrapper.instance().handleChange({target: {value: 5}});
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(undefined, undefined, 5);
    AppWrapper.unmount();
  });

  test('change state when user changes number of events', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents(1.1, 1.2, 5);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events.slice(0, 5));
    AppWrapper.unmount();
  });
})