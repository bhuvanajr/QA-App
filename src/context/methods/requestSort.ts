export const requestSort = (sortConfig, setSortConfig, key) => {
  let direction = 'ascending';
  if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }
  setSortConfig({ key, direction });
};
