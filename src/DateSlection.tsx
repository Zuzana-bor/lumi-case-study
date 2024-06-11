import * as React from 'react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';

import { FC } from 'react';
type ClientProps = {
  handleChange: (date: Date) => void;
};
const DateSelection: FC<ClientProps> = ({ handleChange }) => {
  const [date, setDate] = React.useState<Date>();
  const [calendarOpen, setCalendarOpen] = React.useState(false);

  const handleDateSelect = (day: Date | undefined) => {
    if (day) {
      setDate(day);
      handleChange(day);
      setCalendarOpen(false);
    }
  };

  const handleOpenCalendarClick = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          onClick={handleOpenCalendarClick}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {calendarOpen ? (
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
        ) : null}
      </PopoverContent>
    </Popover>
  );
};

export default DateSelection;
