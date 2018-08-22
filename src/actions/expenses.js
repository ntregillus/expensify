import uuid from 'uuid';
import database from '../firebase/firebase';
// react life cycle
/*
 * component calls action generator
 * action generator return object
 * component dispatches object
 * reduct store changes
 * 
 * new work with redux plugin
 * 
 * component calls action generator
 * action generator returns a FUNCTION (not object as above)
 * component dispatches function
 * function runs (which can trigger other actions!)
 * 
 */

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { //setting defaults if no properties are in expenseData
            description='', note='', amount=0,createdAt=0 
        } = expenseData;
        const newExpense = {description, note, amount, createdAt};
        //returning firebase promist to allow additional promis chaining
        return database.ref('expenses').push(newExpense)
        .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...newExpense
            }));
        });
    };
};

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense    
});
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});