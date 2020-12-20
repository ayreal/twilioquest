const calculatePower = (ary) =>
  ary.reduce((carry, i) => {
    return carry + i * 2;
  }, 0);
