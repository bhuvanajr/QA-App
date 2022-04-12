//example: converts 2507.51 to E2.507,51
export const formatNumberToNlCurrency = (amount: number) => {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(amount);
};

//example: converts 1626863764812 to 21-06-2020
export const getDateFromTimeStamp = (timestamp: number) => {
  let d = new Date(timestamp);
  let timeStampCon = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();

  return timeStampCon;
};
