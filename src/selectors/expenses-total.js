export default (expenses) => {
  if (expenses.length === 0) {
    return 0;
  } else {
    return expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
  }
};

// Ray's Way
// const getExpensesTotal = (expenses) => {
//   let sum = 0;
//   if (expenses && expenses.length === undefined) {
//     sum = expenses.amount;
//   }
//   else if (expenses) {
//     for (let i = 0; i < expenses.length; i++) {
//       sum += expenses[i].amount
//     }
//   };
//   return sum;
// };
