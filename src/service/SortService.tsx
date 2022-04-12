import React, { createContext, useContext } from 'react';
import { Quotes } from '../types/quote';

type SortContextType = {
  getSortedItems: (item: Quotes[]) => Quotes[];
  requestSort: (key) => void;
  sortConfig: any;
};

type Props = {
  initalConfig: any;
};
export const SortContext = createContext<SortContextType | undefined>(undefined);

export const SortService: React.FC<Props> = props => {
  const [sortConfig, setSortConfig] = React.useState(props.initalConfig);

  const getSortedItems = (items: any) => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig!.key] < b[sortConfig!.key]) {
          return sortConfig!.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig!.key] > b[sortConfig!.key]) {
          return sortConfig!.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  };

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <SortContext.Provider
      value={{
        getSortedItems: getSortedItems,
        requestSort: requestSort,
        sortConfig: sortConfig,
      }}
    >
      {props.children}
    </SortContext.Provider>
  );
};

export const useSortContext = () => {
  const context = useContext(SortContext);
  if (context === undefined) throw new Error('No SortContext is provided');
  return context;
};
