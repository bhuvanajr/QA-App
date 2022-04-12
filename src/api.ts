import quotes from './quotes.json';
import { Quotes } from './types/quote';

export const getQuotes = () => {
  let quotesR: Quotes[] = quotes;
  return quotesR;
};
