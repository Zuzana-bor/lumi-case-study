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
  {
    id: '4',
    name: 'Family Therapy',
    durationMinutes: 90,
    price: '800',
    paymentFinalization: 'before',
  },
  {
    id: '5',
    name: 'Cognitive Behavioral Therapy',
    durationMinutes: 75,
    price: '700',
    paymentFinalization: 'after',
  },
  {
    id: '6',
    name: 'Child Therapy',
    durationMinutes: 60,
    price: '500',
    paymentFinalization: 'after',
  },
  {
    id: '7',
    name: 'Online Therapy',
    durationMinutes: 50,
    price: '400',
    paymentFinalization: 'before',
  },
  {
    id: '8',
    name: 'Couples Therapy',
    durationMinutes: 90,
    price: '900',
    paymentFinalization: 'before',
  },
];
