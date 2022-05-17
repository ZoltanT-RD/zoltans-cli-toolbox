const util = require("util");
export const inspect = (input: any): string => {
  return util.inspect(input, false, null, true);
};
