const str1 = process.argv[2].toLowerCase();
const str2 = process.argv[3].toLowerCase();
if (str1 === str2) return console.log('0');
const test = [str1, str2].sort();
const solution = str1 === test[0] ? '-1' : '1';

console.log(solution);
