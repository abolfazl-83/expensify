const expensesReducerDefaultValue = [];
const expensesReducer = (state = expensesReducerDefaultValue,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                return expense.id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id !== action.id){
                    return expense;
                } else {
                    return {
                        ...expense,
                        ...action.updates
                    };
                };
            });
        case 'SET_EXPENSES':
            return [
                ...action.expenses
            ]
        default : return state;
    }
};

export default expensesReducer;