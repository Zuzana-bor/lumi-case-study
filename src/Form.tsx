import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './components/ui/dialog';
import Client from './Client';
import Product from './Product';
import { FC, SetStateAction, useState } from 'react';
import { Button } from './components/ui/button';
import DateSelection from './DateSlection';

type FormProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const initialNewSession: NewSession = {
  client: '',
  session: '',
  date: {},
};

export type NewSession = {
  client: string;
  session: string;
  date: Date;
};

const Form: FC<FormProps> = ({ open, setOpen, handleChange }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add session</DialogTitle>
            <DialogDescription>
              client selection and type of therapy
            </DialogDescription>
          </DialogHeader>
          <Client handleChange={handleChange} />
          <Product handleChange={handleChange} />
          <DateSelection handleChange={handleChange} />
          <Button onClick={handleClick}>Confirm</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Form;
