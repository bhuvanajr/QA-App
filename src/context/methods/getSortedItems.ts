export const getSortedItems = (sortConfig: any, items: any) => {
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
