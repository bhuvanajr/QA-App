import React, { createContext, useContext } from 'react';
import { QAType } from '../types/QAType';
import { getSortedItems } from './methods/getSortedItems';
import { requestSort } from './methods/requestSort';

type SortContextType = {
  methods: { getSortedItems: (item: QAType[]) => QAType[]; requestSort: (key) => void };
  state: { sortConfig: any };
};

type Props = {
  initalConfig: any;
};

export const SortContext = createContext<SortContextType | undefined>(undefined);

export const SortProvider: React.FC<Props> = props => {
  const [sortConfig, setSortConfig] = React.useState(props.initalConfig);

  return (
    <SortContext.Provider
      value={{
        methods: {
          getSortedItems: (items: any) => getSortedItems(sortConfig, items),
          requestSort: (key: any) => requestSort(sortConfig, setSortConfig, key),
        },
        state: {
          sortConfig: sortConfig,
        },
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
