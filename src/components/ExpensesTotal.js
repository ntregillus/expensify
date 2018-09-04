import React from 'react';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import {connect} from 'react-redux';

export const ExpensesTotal = ({expensesTotal, expensesCount}) => {
    const count = expensesCount;
    const plural = count !== 1 ? 'expenses': 'expense';
    const total = numeral(expensesTotal).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing 
                    <span> {count}</span> {plural} totaling 
                    <span> {total}</span>
                </h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>);
};

const mapStateToProps = (state) => {
    const filteredExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expensesCount: filteredExpenses.length,
        expensesTotal: getExpensesTotal(filteredExpenses)/100
    };
}

export default connect(mapStateToProps)(ExpensesTotal);