import React, { Component } from 'react';
import moment from 'moment';
import { ResponsiveContainer, BarChart, Bar, Label, LabelList, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class EventChart extends Component {

    state = {
      events: []
    }

    getData = (events) => {
    const next7Days = [];
    const currentDate = moment();
    // Loop 7 times for each day
    for (let i = 0; i < 7; i++) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      const n = this.countEventsOnDate(events, dateString);
      const dateDisplay = currentDate.format('Do MMM');
      const numberDisplay = n ? n : '';
      next7Days.push({date: dateDisplay, number: numberDisplay});
    }
    return next7Days;
  };

  countEventsOnDate = (events, date) => {
    let n = 0; // Number of events
    events.forEach((event) => {
      if(event.local_date === date) n++;
    });
    return n;
  };

  render() {

    const { events } = this.props;

    return(
    <ResponsiveContainer height={400}>
      <BarChart margin={{top: 20, right: 0, bottom: 50, left: 0}} data={this.getData(events)}>
        {/* <CartesianGrid /> */}
        <XAxis type="category" dataKey="date" interval="preserveStartEnd" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Bar dataKey="number" fill="#5BC0BE">
          <LabelList dataKey="number" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
  }
  
}

export default EventChart;