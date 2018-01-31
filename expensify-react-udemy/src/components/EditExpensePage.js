import React from 'react';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => (
    <div>
        <h1> Edit Expense # {props.match.params.id}</h1>
        <ExpenseForm />
    </div>
);

export default EditExpensePage;