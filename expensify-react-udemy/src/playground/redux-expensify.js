import { createStore, combineReducers } from "redux";

// 0 - default states for expenses

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// 1 - create reducer 

const expensesReducer = ( state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
const filterReducer = (state = filtersReducerDefaultState, action) =>{
    switch (action.type) {
        default:
            return state;
    }
}
// 2 - insert reducer in the store with combineReducers

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer

}));

// 3 - just checking the current state of store

console.log(store.getState());