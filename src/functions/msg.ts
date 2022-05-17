export const msg = (msg: string, level = 0, preEnd = '-') => {
  if (msg.length > 0) {
    let spaces = '';
    let pre_end = preEnd;

    for (let index = 0; index < level; index++) {
      spaces += ' ';
      pre_end += pre_end;
    }

    console.log(`${spaces}${pre_end}${msg}`);
  }

  console.log(msg);
};
