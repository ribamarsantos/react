import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashBoardPage = () => (
    <div> 
        <h1>Main Page </h1>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;