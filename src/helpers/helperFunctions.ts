//Generates UUID
export const getUuid = () => {
  var uuid = require('uuid');
  var id = uuid.v4();
  return id;
};
