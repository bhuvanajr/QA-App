import React, { createContext, useContext } from 'react';
import { QAType } from '../../types/QAType';
import { getSortedItems, requestSort, getSortIconClassName } from './methods';

type SortContextType = {
  methods: {
    getSortedItems: (item: QAType[]) => QAType[];
    requestSort: (key) => void;
    getSortIconClassName: (name) => any;
  };
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
          getSortIconClassName: name => getSortIconClassName(name, sortConfig),
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
