import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> Component', () => {

  let EventWrapper;
  let eventDetails;

  beforeAll(() => {
    eventDetails = {
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
    };
    EventWrapper = shallow(<Event event={eventDetails}/>);
  });

  test('render event date', () => {
    expect(EventWrapper.find('.event-details__date')).toHaveLength(1);
    expect(EventWrapper.find('.event-details__date').text()).toBe(eventDetails.local_date);
  });

  test('render event name', () => {
    expect(EventWrapper.find('.event-details__name')).toHaveLength(1);
    expect(EventWrapper.find('.event-details__name').text()).toBe(eventDetails.name);
  });


})