import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';

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
                <h1>edit</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit} 
                    expense={this.props.expense}    
                />
                <button onClick={this.onRemove}>
                    Remove 
                </button>
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
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expense) => dispatch(startRemoveExpense(expense))
});
    
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);