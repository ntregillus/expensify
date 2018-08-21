import React from 'react';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import {connect} from 'react-redux';

export const ExpensesTotal = ({expensesTotal, expensesCount}) => {
    const count = expensesCount;
    const plural = count !== 1 ? 'expenses': 'expense';
    const total = numeral(expensesTotal).format('$0,0.00');
    return <h3>Viewing {count} {plural} totaling {total}</h3>
};

const mapStateToProps = (state) => {
    const filteredExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expensesCount: filteredExpenses.length,
        expensesTotal: getExpensesTotal(filteredExpenses)/100
    };
}

export default connect(mapStateToProps)(ExpensesTotal);