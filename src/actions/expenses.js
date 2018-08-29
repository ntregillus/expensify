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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const { //setting defaults if no properties are in expenseData
            description='', note='', amount=0,createdAt=0 
        } = expenseData;
        const newExpense = {description, note, amount, createdAt};
        //returning firebase promist to allow additional promis chaining
        return database.ref(`users/${uid}/expenses`).push(newExpense)
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

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log(`removing users/${uid}/expenses/${id}`);
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=> {
            console.log('successfully removed from firebase');
            dispatch(removeExpense({id}));
        });
    };
 };
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
        .update(updates, ()=> {
            dispatch(editExpense(id, updates));
        });
    };
};

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const setExpenses = (expenses = []) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
};

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value', (snapshot)=> {
            let result = [];
            snapshot.forEach((childSnapshot) => {
                result.push({
                    ...childSnapshot.val(),
                    id: childSnapshot.key
                });
            });
            dispatch(setExpenses(result));
        });
    };
};