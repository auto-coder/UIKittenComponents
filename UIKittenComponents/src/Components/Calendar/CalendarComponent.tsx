import React from 'react';
import { RangeCalendar } from '@ui-kitten/components';

 const CalendarComponent = () => {

  const [range, setRange] = React.useState({});

  return (
    <RangeCalendar
      range={range}
      onSelect={nextRange => setRange(nextRange)}
    />
  );
};

export default CalendarComponent;