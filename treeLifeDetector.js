const arg = Number(process.argv[2]);

const status = arg === 0 ? 'alive' : 'other';
console.log(status);
