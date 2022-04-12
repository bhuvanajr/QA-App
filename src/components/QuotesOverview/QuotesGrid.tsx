import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { getQuotes } from '../../api';
import { Quotes } from '../../types/quote';
import { QuotesGridHeader } from './QuotesGridHeader';
import { QuotesGridBody } from './QuotesGridBody';
import { QuotesGridFooter } from './QuotesGridFooter';
import { SortService } from '../../service/SortService';
import { FormProvider, useForm } from 'react-hook-form';

export const QuotesGrid: React.FC = () => {
  const [data, setData] = useState<Quotes[]>([]);
  const initialConfig = { key: 'solution', direction: 'ascending' };
  const formMethods = useForm();

  useEffect(() => {
    const data1 = getQuotes();
    if (data1) setData(data1!);
  }, []);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <SortService initalConfig={initialConfig}>
      <div className="title-block">
        <h2 className="title">Quotes Overview for you</h2>
        <h3 className="subtitle">Choose and accept from the quotes below</h3>
      </div>

      <div className="container-lg rounded mb-10 ">
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
            <Accordion>
              <div className="table-responsive rounded">
                <table className="table mb-0">
                  <QuotesGridHeader />
                  <QuotesGridBody results={data} />
                </table>
              </div>
            </Accordion>
            <QuotesGridFooter />
          </form>
        </FormProvider>
      </div>
    </SortService>
  );
};
