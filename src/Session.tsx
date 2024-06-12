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

  const sortedFormData = [...formData].sort(
    (a, b) => new Date(a.dob).getTime() - new Date(b.dob).getTime(),
  );

  return (
    <div className="flex flex-col items-center space-y-6 mx-4 md:flex-row md:items-start md:space-y-0 md:space-x-4 md:justify-between ">
      <div className="md:w-1/4 flex flex-col space-y-4 mr-4">
        <Button
          onClick={handleClick}
          className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-8 px-16  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-4 text-lg "
        >
          Add session
        </Button>
        {openForm ? (
          <TestForm addFormData={addFormData} hideForm={hideForm} />
        ) : null}
      </div>
      <div className="md:w-3/4 md:mx-4 md:pl-16 ">
        <Accordion
          type="single"
          collapsible
          className="text-blue   px-7   rounded-lg w-full md:w-[80%] bg-white shadow-2xl"
        >
          {Array.isArray(sortedFormData) && sortedFormData.length > 0 && (
            <>
              {sortedFormData.map((data, index) => {
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
                        <div className="w-full md:w-1/2 px-2 mb-4 ">
                          <Card className="h-full text-left pl-4 pb-4 bg-[#FBE9E7] ">
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pb-2">
                              Client:
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
                                      Generate Invoices:
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
                          <Card className="h-full text-left pl-4 pb-4 bg-[#FBE9E7] ">
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pb-2">
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
      </div>
    </div>
  );
};

export default Session;
