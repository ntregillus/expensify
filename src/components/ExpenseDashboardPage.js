import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesTotal from './ExpensesTotal';
export const ExpenseDashboardPage = () => (
    <div>
        <ExpensesTotal />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);


export default ExpenseDashboardPage;