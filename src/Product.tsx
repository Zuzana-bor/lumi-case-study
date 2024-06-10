import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { products } from './data/products';
import { initialNewSession } from './Form';

type ProductProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Product: React.FC<ProductProps> = ({ handleChange }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? products.find((product) => product.name === value)?.name
              : 'product...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <input
              placeholder="Search product..."
              onChange={handleChange}
              value={initialNewSession.session}
            />
            <CommandList>
              <CommandEmpty>No product found.</CommandEmpty>
              <CommandGroup>
                {products.map((product) => (
                  <CommandItem
                    key={product.id}
                    value={product.name}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === product.name ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {product.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Product;
