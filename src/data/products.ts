type PaymentFinalization = 'before' | 'after'; // Client pays before or after the session

export type Product = {
  id: string;
  name: string;
  durationMinutes: number;
  price: string;
  paymentFinalization: PaymentFinalization;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Therapy',
    durationMinutes: 60,
    price: '500',
    paymentFinalization: 'after',
  },
  {
    id: '2',
    name: 'Group Therapy',
    durationMinutes: 120,
    price: '600',
    paymentFinalization: 'before',
  },
  {
    id: '3',
    name: 'Coaching',
    durationMinutes: 45,
    price: '1000',
    paymentFinalization: 'after',
  },
];
