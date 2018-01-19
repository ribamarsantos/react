const expensesReducerDefaultState = [];

export default  ( state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return [
                state.filter(({ id }) => action.id !== id) // todos expenses diferente do id passado na action
            ];
            break;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            })
            break;
        default:
            return state;
    }
}