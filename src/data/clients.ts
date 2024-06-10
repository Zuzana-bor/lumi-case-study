type PaymentMethod = 'card' | 'paypal' | 'bank-transfer';
type Location = 'online' | 'in-person';

export type Client = {
  id: string;
  name: string;
  discount: string;
  paymentMethodPreference: PaymentMethod;
  locationPreference: Location;
  generateInvoices: boolean;
};

export const clients: Client[] = [
  {
    id: '1',
    name: 'Jan Novák',
    discount: '15%',
    paymentMethodPreference: 'card',
    locationPreference: 'online',
    generateInvoices: true,
  },
  {
    id: '2',
    name: 'Petr Vrátný',
    discount: '10%',
    paymentMethodPreference: 'paypal',
    locationPreference: 'in-person',
    generateInvoices: false,
  },
  {
    id: '3',
    name: 'Josef Cihlář',
    discount: '5%',
    paymentMethodPreference: 'bank-transfer',
    locationPreference: 'online',
    generateInvoices: true,
  },
];
