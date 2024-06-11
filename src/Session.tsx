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

const Session = () => {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState<z.infer<typeof formSchema>[]>([]);
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
      <Accordion type="single" collapsible>
        {Array.isArray(formData) && formData.length > 0 && (
          <AccordionItem value="item-1">
            {formData.map((data, index) => {
              const formattedDate = new Date(data.dob).toLocaleDateString();
              return (
                <div key={index}>
                  <AccordionTrigger>
                    <p>
                      {data.client}, {data.product}, {formattedDate}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      {data.client && (
                        <>
                          {findClientByName(data.client) ? (
                            <>
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

                    <Card>
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
                  </AccordionContent>
                </div>
              );
            })}
          </AccordionItem>
        )}
      </Accordion>
      <Button onClick={handleClick}>Add session</Button>
      {openForm ? (
        <TestForm addFormData={addFormData} hideForm={hideForm} />
      ) : null}
    </>
  );
};

export default Session;
