import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from './components/ui/button';
import { z } from 'zod';
import TestForm, { formSchema } from './TestForm';
import { Client, clients } from './data/clients';
import { Product, products } from './data/products';
import { Card } from './components/ui/card';
import { useLocalStorage } from '@uidotdev/usehooks';

const Session = () => {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useLocalStorage<z.infer<typeof formSchema>[]>(
    'formData',
    [],
  );
  const handleClick = () => {
    setOpenForm(!openForm);
  };

  const findClientByName = (name: string): Client | undefined => {
    return clients.find((client) => client.name === name);
  };

  const findProductByName = (name: string): Product | undefined => {
    return products.find((product) => product.name === name);
  };

  const addFormData = (data: z.infer<typeof formSchema>) => {
    setFormData((prev: z.infer<typeof formSchema>[]) => [...prev, data]);
  };

  const hideForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="text-blue mx-24 border-solid border-2 border-sky-500  py-30 px-80    rounded-full"
      >
        {Array.isArray(formData) && formData.length > 0 && (
          <>
            {formData.map((data, index) => {
              const formattedDate = new Date(data.dob).toLocaleDateString();
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <div>
                    <AccordionTrigger>
                      <p>
                        {data.client}, {data.product}, {formattedDate}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-wrap">
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <Card className="h-full">
                          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Client
                          </h4>
                          {data.client && (
                            <>
                              {findClientByName(data.client) ? (
                                <>
                                  <p>
                                    Id:
                                    {findClientByName(data.client)?.id}
                                  </p>
                                  <p>
                                    Discount:
                                    {findClientByName(data.client)?.discount}
                                  </p>
                                  <p>
                                    Payment Method Preference:
                                    {
                                      findClientByName(data.client)
                                        ?.paymentMethodPreference
                                    }
                                  </p>
                                  <p>
                                    Location Preference:
                                    {
                                      findClientByName(data.client)
                                        ?.locationPreference
                                    }
                                  </p>
                                  <p>
                                    Generate Invoices:{' '}
                                    {findClientByName(
                                      data.client,
                                    )?.generateInvoices.toString()}
                                  </p>
                                </>
                              ) : (
                                <p>Client not found.</p>
                              )}
                            </>
                          )}
                        </Card>
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <Card className="h-full ">
                          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Product:
                          </h4>
                          {data.product && (
                            <>
                              {findProductByName(data.product) ? (
                                <>
                                  <p>
                                    Id:
                                    {findProductByName(data.product)?.id}
                                  </p>
                                  <p>
                                    DurationMinutes:
                                    {
                                      findProductByName(data.product)
                                        ?.durationMinutes
                                    }
                                  </p>
                                  <p>
                                    Price:
                                    {findProductByName(data.product)?.price}
                                  </p>
                                  <p>
                                    Payment finalization
                                    {
                                      findProductByName(data.product)
                                        ?.paymentFinalization
                                    }
                                  </p>
                                </>
                              ) : (
                                <p>Product not found.</p>
                              )}
                            </>
                          )}
                        </Card>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              );
            })}
          </>
        )}
      </Accordion>
      <Button
        onClick={handleClick}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-8 px-16  rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 m-4 text-lg "
      >
        Add session
      </Button>
      {openForm ? (
        <TestForm addFormData={addFormData} hideForm={hideForm} />
      ) : null}
    </>
  );
};

export default Session;
