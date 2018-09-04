import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect } from 'react-redux'
import PageHeader from './PageHeader';
import {startAddExpense} from '../actions/expenses';

export class CreateExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <PageHeader title="Create Expense" />
                <div className="content-container">
                    <ExpenseForm onSubmit={this.onSubmit}/>
                </div>           
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(startAddExpense(expense))
});
export default connect(undefined, mapDispatchToProps)(CreateExpensePage);