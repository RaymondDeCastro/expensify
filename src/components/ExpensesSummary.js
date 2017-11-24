import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = ({ expenseCount, totalAmount }) => (
  <div>
    <h1>
      {
        expenseCount === 1 ? 
        `Viewing 1 expense totalling ${numeral(totalAmount / 100).format('$0,0.00')}` :
        `Viewing ${expenseCount} expenses totalling ${numeral(totalAmount / 100).format('$0,0.00')}`
      }
    </h1>  
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    totalAmount: getExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary); 

