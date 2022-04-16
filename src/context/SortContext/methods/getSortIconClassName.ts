export const getSortIconClassName = (name, sortConfig) => {
  if (!sortConfig) {
    return;
  }
  return sortConfig.key === name ? sortConfig.direction : undefined;
};
