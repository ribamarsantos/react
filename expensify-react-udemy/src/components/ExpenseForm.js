import React from 'react';
import { addExpense } from '../actions/expenses';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-dates/initialize'; // with version 12.6.0 is not necessary
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

// moment.locale('pl');

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: '',
        note: '',
        createdAt: moment(),
        calendarFocused: false
    }
    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({description}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if( amount.match(/^\d*(\.\d{0,2})?$/)){ 
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt}));
    }
    onCalendarFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
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
                       type="text"
                       placeholder="amount"
                       onChange={this.onAmountChange}
                       value={this.state.amount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused} 
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}                   
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