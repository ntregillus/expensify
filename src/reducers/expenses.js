
const expensesReducerDefaultState = [];
const expensesReducer = (state=expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            const result = [...state, action.expense];
            return result;
        case 'REMOVE_EXPENSE':
        const r = state.filter((item)=> item.id != action.id);
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
        return newResult;
        default:
        return state;
    }
};

export default expensesReducer;