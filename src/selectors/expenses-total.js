

const getExpensesTotal = (expenses = [])=> {
    if(expenses.length === 0){
        return 0;
    }
    return expenses.reduce((accumulator=0, curExpense) =>{
        return accumulator + curExpense.amount
    });
};

export default getExpensesTotal;