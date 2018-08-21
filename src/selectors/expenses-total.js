

const getExpensesTotal = (expenses = [])=> {
    if(expenses.length === 0){
        return 0;
    }
    const result = expenses.reduce((accumulator, curExpense) =>{
        return accumulator + curExpense.amount;
    }, 0);
    return result;
};

export default getExpensesTotal;