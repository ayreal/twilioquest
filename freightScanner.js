const scan = (ary) => {
  let count = 0;
  ary.forEach((str) => {
    if (str === 'contraband') count++;
  });
  return count;
};

// If a string in the array is equal to the value contraband, then you should increment a number which would represent the number of times you have found contraband. Once you have looped through the entire array, return the number of times you found the string contraband within the array.
