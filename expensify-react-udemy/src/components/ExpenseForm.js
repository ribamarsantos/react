import React from 'react';
import { addExpense } from '../actions/expenses';


export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: ''
    }
    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({description}));
    }
    onNoteChange = (e) => {
        // another way 
    //   const note = e.target.value;
      e.persist();
      this.setState(() => ({note: e.target.value}));
    }
    render() {
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="description"
                        autoFocus
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                     />
                    <input
                       type="number"
                       placeholder="amount"
                    />
                    <textarea
                       placeholder="note (optional)"
                       onChange={this.onNoteChange}
                       value={this.state.note} 
                    >
                    </textarea>
                    <button> Save</button>
                </form>
            </div>
        );
    }
}