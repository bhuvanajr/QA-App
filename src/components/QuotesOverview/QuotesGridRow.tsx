import React from 'react';
import { Quotes } from '../../types/quote';
import { formatNumberToNlCurrency, getDateFromTimeStamp } from '../../helpers/helperFunctions';
import { useFormContext } from 'react-hook-form';

type Props = {
  data: Quotes;
  id: number;
};

export const QuotesGridRow: React.FC<Props> = ({ data, id }) => {
  const totalPrice = data.items.map(item => item.retailPrice).reduce((a, b) => a + b);
  const formattedPrice = formatNumberToNlCurrency(totalPrice);
  const { register } = useFormContext();

  return (
    <>
      <td>
        <input type="checkbox" value={data.reference} {...register('quotes.' + id)} />
      </td>
      <th scope="row" className="text-primary">
        {data.solution}
      </th>
      <td>{getDateFromTimeStamp(data.created)}</td>
      <td>{getDateFromTimeStamp(data.expirationDate)}</td>
      <td>{formattedPrice}</td>
    </>
  );
};
