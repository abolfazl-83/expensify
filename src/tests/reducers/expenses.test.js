import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


let state;
beforeEach(() => {
    state = []
});
test('should return the correct state after initilization phase' , () => {
    const result = expensesReducer(undefined , {type : '@@INIT'})
    expect(result).toEqual([])
});

test('should return the correct state after addExpense' , () => {
    const result = expensesReducer(state , {type : 'ADD_EXPENSE' , expense : expenses[1]});
    expect(result).toEqual([expenses[1]])
});

test('should return the correct state after editExpense' , () => {
    state = [expenses[2]];

    const result = expensesReducer(state , {type : 'EDIT_EXPENSE' , id : '3', updates : {description : 'asqar' , amount : 12}})
    expect(result).toEqual([{
        ...expenses[2],
        description : 'asqar', 
        amount : 12
    }])
});

test('should return the correct state after not editing the expense with the wrong id' , () => {
    state = [expenses[2]];

    const result = expensesReducer(state , {type : 'EDIT_EXPENSE' , id : '5', updates : {description : 'asqar' , amount : 12}});
    expect(result).toEqual([expenses[2]]);
})

test('should return the correct state after removeExpense' , () => {
    state = expenses;

    const result = expensesReducer(state , {type : 'REMOVE_EXPENSE' , id : '2'});
    expect(result).toEqual([expenses[0] , expenses[2]])
});

test('should return the correct state after not removing any expense with the wrong id' , () => {
    state = [expenses[1] , expenses[0]];

    const result = expensesReducer(state , {type : 'REMOVE_EXPENSE' , id : '10'});
    expect(result).toEqual(state);
});

test('should return the correct state after setExpenses', () => {
    const result = expensesReducer(state , {type : 'SET_EXPENSES', expenses : [expenses[0], expenses[2]]});
    expect(result).toEqual([expenses[0],expenses[2]])
});
