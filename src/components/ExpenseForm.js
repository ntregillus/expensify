import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


const now = moment();
console.log(now.format('MMM Do YYYY'));

class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: '',
        note: '',
        createdAt: moment(),
        calFocused: false,
        error: ''
    };
    constructor(props){
        super(props);
        this.state = {
            description: '',
            amount: '',
            note: '',
            ...(props.expense||{createdAt: moment()}),
            calFocused: false,
            error: ''
        };
        if(props.expense)
        {
            this.state.createdAt = moment(props.expense.createdAt);
            this.state.amount = (props.expense.amount/100).toString();
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
    if(!amount ||amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    }
    onCalFocusChange = ({focused}) => this.setState((state)=> ({calFocused: focused}))
    createExpense = (e) =>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error:'Description and Amount are required'}));
        }else{
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description:this.state.description ,
                amount: parseFloat(this.state.amount)*100, //we need in cents, not dollars
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
             });
        }



    }
    render () {
        return (  
            <form onSubmit={this.createExpense}
                className="form">
                {   this.state.error 
                    && <p className="form__error" >{this.state.error}</p>
                }
                <input 
                    className="text-input"
                    type="text" 
                    value={this.state.description}  
                    onChange={this.onDescriptionChange}
                    placeholder="description" autoFocus />
                <input 
                    className="text-input"
                    type="text" 
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    placeholder="amount" />

                <SingleDatePicker 
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange}
                    focused={this.state.calFocused}
                    onFocusChange={this.onCalFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day)=> false}
                    />
                <textarea 
                    className="textarea"
                    placeholder="Add a note for expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}>
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}
export default ExpenseForm;