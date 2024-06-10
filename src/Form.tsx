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
import { useState } from 'react';

const Form = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add session</Button>
      </DialogTrigger>
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
