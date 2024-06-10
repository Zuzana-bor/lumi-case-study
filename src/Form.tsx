import { Button } from './components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog';
import Client from './Client';
import Product from './Product';
import { FC } from 'react';

type FormProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form: FC<FormProps> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add session</DialogTitle>
          <DialogDescription>
            client selection and type of therapy
          </DialogDescription>
        </DialogHeader>
        <Client />
        <Product />
      </DialogContent>
    </Dialog>
  );
};

export default Form;
