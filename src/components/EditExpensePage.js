import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import PageHeader from './PageHeader';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.match.params.id, expense);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeExpense({id: this.props.match.params.id});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <PageHeader title="Edit Expense" />
                <div className="content-container">
                    <ExpenseForm 
                        onSubmit={this.onSubmit} 
                        expense={this.props.expense}    
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>
                        Remove Expense
                    </button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(({id})=> props.match.params.id == id)
    }
};

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    removeExpense: (expense) => dispatch(startRemoveExpense(expense))
});
    
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);