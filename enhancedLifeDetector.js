const arg = Number(process.argv[2]);

const statusMap = {
  0: 'alive',
  1: 'flowering',
  2: 'shedding',
};

const status = statusMap[arg] || 'other';
console.log(status);
