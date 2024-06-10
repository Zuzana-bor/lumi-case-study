import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Form, { NewSession } from './Form';
import { Button } from './components/ui/button';
import TestForm from './TestForm';

const Session = () => {
  const [newSession, setNewSession] = useState<NewSession>();
  const [openForm, setOpenForm] = useState<boolean>(false);

  const handleClick = () => {
    setOpenForm(!openForm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    console.log('co?');
  };

  return (
    <>
      <TestForm />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button onClick={handleClick}>Add session</Button>
      <Form open={openForm} setOpen={setOpenForm} handleChange={handleChange} />
    </>
  );
};

export default Session;
