const users = [
  { name: 'Igor', amount: 19 },
  { name: 'Danil', amount: 1 },
  { name: 'Ivan', amount: 4 },
  { name: 'Matvey', amount: 16 },
];

const sum = users.reduce((acc, user) => {
  const newAcc = acc + user.amount;
  return newAcc;
}, 0);
// const sum = users.reduce((acc, user) => acc + user.amount, 0);
console.log(sum);
