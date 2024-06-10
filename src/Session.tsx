import { useState } from 'react';
import { Calendar } from './components/ui/calendar';
import Form from './Form';

const Session = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [openForm, setOpenForm] = useState<boolean>(false);

  const handleClickDate = () => {
    setOpenForm(!openForm);
  };

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        onDayClick={handleClickDate}
      />
      <Form open={openForm} setOpen={setOpenForm} />
    </>
  );
};

export default Session;
