import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Client from './Client';
import Product from './Product';
import DateSelection from './DateSlection';
import { FC, useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Card } from './components/ui/card';
import Session from './Session';

export const formSchema = z.object({
  client: z
    .string({ required_error: 'select a client' })
    .min(2, { message: 'too short' })
    .max(50, { message: 'too long' }),
  product: z.string({ required_error: 'select a product' }),
  dob: z.date({ required_error: 'select a date' }),
});

type TestFormProps = {
  addFormData: (data: z.infer<typeof formSchema>) => void;
  hideForm: () => void;
};

const TestForm: FC<TestFormProps> = ({ addFormData, hideForm }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleChangeClient = (value: string) => {
    form.setValue('client', value);
  };
  const handleChangeProduct = (value: string) => {
    form.setValue('product', value);
  };

  const handleChangeDate = (date: Date) => {
    form.setValue('dob', date);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    addFormData(data);
    form.reset();
    hideForm();
  };

  return (
    <>
      <Card className="w-full md:w-[350px] mx-auto p-4  text-blue shadow-2xl">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
            <FormField
              control={form.control}
              name="client"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Client</FormLabel>
                  <Client handleChange={handleChangeClient} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="product"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Product</FormLabel>
                  <Product handleChange={handleChangeProduct} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of session</FormLabel>
                  <DateSelection handleChange={handleChangeDate} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-8 px-16  rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 m-4 text-lg "
              type="submit"
            >
              Submit
            </Button>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};

export default TestForm;
