let storedItems = [];
try
{ storedItems = JSON.parse(localStorage.getItem('expenses'))||[];
}catch(e){
  storedItems = [];
}
const expensesReducerDefaultState = [...storedItems];
const expensesReducer = (state=expensesReducerDefaultState, action) => {
    const storeState = (expenses) => localStorage.setItem('expenses', JSON.stringify(expenses));
    switch(action.type){
        case 'ADD_EXPENSE':
        const result = [...state, action.expense];
        storeState(result)
        return result;
        case 'REMOVE_EXPENSE':
        const r = state.filter((item)=> item.id != action.id);
        storeState(r)
        return r;
        case 'EDIT_EXPENSE':
        const newResult = state.map((expense)=>{
            if(expense.id === action.id){
                return {
                    ...expense, 
                    ...action.updates
                };
            }
            else{
                return expense;
            }
        });
        storeState(newResult);
        return newResult;
        default:
        return state;
    }
};

export default expensesReducer;