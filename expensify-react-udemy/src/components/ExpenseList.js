import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
      <h1> List of expense </h1>
        { 
            props.expenses.map( (expense) => (
            <ExpenseListItem
                key={expense.id}
                {...expense}
            />
        ))
        }
        <p>Total de items: {props.expenses.length}</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : getVisibleExpenses(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);

// props.options.map((option) => (
//     <Option
//       key={option}
//       optionText={option}
//       handleDeleteOption={props.handleDeleteOption}
//     />
//   ))