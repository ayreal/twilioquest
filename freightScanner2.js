const scan = (ary) => {
  const solution = [];
  ary.forEach((item, idx) => {
    if (item === 'contraband') solution.push(idx);
  });
  return solution;
};

// If a string in the input array is equal to the value contraband, add the index of that item to an output array. When you have finished scanning the entire input array, return the output array, which should contain all the indexes of suspicious items in the array.

// For example, given an input array of:

// ['contraband', 'apples', 'cats', 'contraband', 'contraband']
// Your function should return the array:

// [0, 3, 4]
