import { Calendar } from './components/ui/calendar';
import { Button } from './components/ui/button';
import React from 'react';

const Session = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);
  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Button>Confirm</Button>
    </>
  );
};

export default Session;
