const workers = ['ahmed', 'khiro', 'sami', 'toni', 'alia'];
const new_worker = ['safi', 'amjed'];

const all = workers.concat(new_worker);

console.log(all.copyWithin(0, 1, 2));

const degree = [10, 12, 1, 13];
console.log(degree.every((ele) => ele > 10));
