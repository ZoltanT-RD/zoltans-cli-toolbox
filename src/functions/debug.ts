import { inspect } from './inspect';
export const debug = (input: any) => {
  console.log(inspect(input));
};
