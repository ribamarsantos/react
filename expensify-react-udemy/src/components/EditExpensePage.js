import React from 'react';

const EditExpensePage = (props) => (
    <div>
       <h1> Edit Expense # {props.match.params.id}</h1>

    </div>
);

export default EditExpensePage;