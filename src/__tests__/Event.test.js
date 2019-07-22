import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> Component', () => {

  let EventWrapper;
  let details;

  beforeAll(() => {
    EventWrapper = shallow(<Event />);
    // Set template event in state
    EventWrapper.setState({
      details: {
        id: "qhnpfqyzlbrb",
        name: "TBA",
        local_date: "2019-08-13",
        local_time: "18:45",
        yes_rsvp_count: 2,
        group: {
          created: 1451821401000,
          name: "NottsJS",
          id: 19268350,
          join_mode: "open",
          lat: 52.95000076293945,
          lon: -1.1399999856948853,
          urlname: "NottsJS",
          who: "Members",
          localized_location: "Nottingham, United Kingdom",
          state: "J9",
          country: "gb",
          region: "en_US",
          timezone: "Europe/London"
        },
        link: "https://www.meetup.com/NottsJS/events/qhnpfqyzlbrb/",
        description: "<p>We're back!</p> <p>We'll post more detail shortly but along with a talk we will be looking to gather community input of what interests you and how NottsJS can support you! Look forward to the return of the infamous Cool Wall and more!</p> ",
        visibility: "public"
      }
    });
    details = EventWrapper.state('details');
  });

  test('render event date', () => {
    expect(EventWrapper.find('.event-date')).toHaveLength(1);
    expect(EventWrapper.find('.event-date').text()).toBe(details.local_date);
  });

  test('render event name', () => {
    expect(EventWrapper.find('.event-name')).toHaveLength(1);
    expect(EventWrapper.find('.event-name').text()).toBe(details.name);
  });

  test('render event group name', () => {
    expect(EventWrapper.find('.event-group')).toHaveLength(1);
    expect(EventWrapper.find('.event-group').text()).toBe(details.group.name);

  });

  test('render event rsvp count', () => {
    expect(EventWrapper.find('.event-rsvp')).toHaveLength(1);
    expect(EventWrapper.find('.event-rsvp').text()).toBe(String(details.yes_rsvp_count));
  });

  test('render show event details button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('check event modal hidden by default', () => {
    expect(EventWrapper.find('.modal').hasClass('display-hidden')).toBe(true);
  })

  test('check moreInfo default state', () => {
    const moreInfo = EventWrapper.state('moreInfo');
    expect(moreInfo).toBe(false);
  })

  test('change state when details is clicked', () => {
    EventWrapper.find('.show-details').simulate('click');
    const moreInfo = EventWrapper.state('moreInfo');
    expect(moreInfo).toBe(true);
  })

})