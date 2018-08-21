import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpensesTotal from './ExpensesTotal';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length  === 0 ? (
            <p>No Expenses</p>
          )  : (
            props.expenses.map( (expense) => {
                return (
                    <div key={expense.id} >
                        <ExpenseListItem {...expense} /> 
                        <hr />
                    </div>
                );
            })
        )
    }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);
