const addFirstToLast = (ary) => {
  const lastIdx = ary.length - 1;
  return ary.length ? `${ary[0]}${ary[lastIdx]}` : '';
};
