import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';

describe('<CitySearch /> Component', () => {
  
  let CitySearchWrapper;

  beforeAll(() => {
    CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}}/>);
  })

  test('render test input', () => {
    expect(CitySearchWrapper.find('.search-bar__input')).toHaveLength(1);
  })

  test('render list of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  })

  test('render text input correctly', () => {
    const query = CitySearchWrapper.state('query'); // Set query element from CitySearch state 
    expect(CitySearchWrapper.find('.search-bar__input').prop('value')).toBe(query);
  })

  test('change state when text input changes', () => {
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.search-bar__input').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe(eventObject.target.value);
  })

  test('render list of suggestions correctly', () => {
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length);
    for (let i = 0; i < suggestions.length; i++) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i].name_string);
    }
  })

  test('click on suggestion should change query state and empty the list of suggestions', () => {
    CitySearchWrapper.setState({
      suggestions: [
        {
          city: 'Munich',
          country: 'de',
          localized_country_name: 'Germany',
          name_string: 'Munich, Germany',
          zip: 'meetup3',
          lat: 48.14,
          lon: 11.58
        },
        {
          city: 'Munich',
          country: 'us',
          localized_country_name: 'USA',
          state: 'ND',
          name_string: 'Munich, North Dakota, USA',
          zip: '58352',
          lat: 48.66,
          lon: -98.85
        }
      ]
    });
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe('Munich, Germany');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(0);
  })

})

describe('<CitySearch /> Integration', () => {
  
  test('get a list of cities when user searches for Munich', async () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    CitySearchWrapper.find('.search-bar__input').simulate('change', {target: {value: 'Munich'}});
    await CitySearchWrapper.update();
    expect(CitySearchWrapper.state('suggestions')).toEqual([
      {
        city: 'Munich',
        country: 'de',
        localized_country_name: 'Germany',
        name_string: 'Munich, Germany',
        zip: 'meetup3',
        lat: 48.14,
        lon: 11.58
      },
      {
        city: 'Munich',
        country: 'us',
        localized_country_name: 'USA',
        state: 'ND',
        name_string: 'Munich, North Dakota, USA',
        zip: '58352',
        lat: 48.66,
        lon: -98.85
      }
    ]);
  });
});
