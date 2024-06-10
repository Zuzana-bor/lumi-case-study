import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { clients } from './data/clients';

const Client = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Client name" />
        </SelectTrigger>
        <SelectContent>
          {clients.map((client) => (
            <SelectItem value={client.id}>{client.name}</SelectItem>
          ))}
          <SelectItem value="id">Jan Novák</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default Client;
