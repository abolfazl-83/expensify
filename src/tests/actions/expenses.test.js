import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startAddExpense,
    startEditExpense,
    startRemoveExpense,
    startSetExpenses
    } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const uid = 'qwerty';
const state = { auth : {uid : uid}};
const createMockStore = configureStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({description , amount , note , createdAt , id}) => {
        expenseData[id] = {
            description,
            amount,
            note,
            createdAt
        }
    })
    database.ref(`users/${uid}/expenses`).set(expenseData).then(() => {
        done();
    })
})


test('should return the correct object from addExpense', () => {
    const result = addExpense(expenses[1]);
    expect(result).toEqual({
        type : 'ADD_EXPENSE',
        expense : expenses[1]
    })
})

test('should add Expense to database and dispatch the function to the mockstore', (done) => {
    const store = createMockStore(state);
    const expense = {
        description : expenses[1].description,
        note : expenses[1].note,
        amount : expenses[1].amount,
        createdAt : expenses[1].createdAt,
    };
    store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'ADD_EXPENSE',
            expense : {
                id : expect.any(String),
                ...expense
            }
        })

        database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((dataSnapshot) => {
            expect(dataSnapshot.val()).toEqual(expense);
            done();
        });
    })
});

test('should return the correct object from editExpense', () => {
    const result = editExpense(expenses[0].id , {description : 'akbar', amount : 12345});
    expect(result).toEqual({
        type : 'EDIT_EXPENSE',
        id : expenses[0].id,
        updates : {
            description : 'akbar',
            amount : 12345
        }
    })
})


test('should edit the correct expense in redux mock store and database', (done) => {
    const store = createMockStore(state);
    const id = expenses[2].id;
    const updates = {amount : 9876};

    store.dispatch(startEditExpense(id , updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'EDIT_EXPENSE',
            id : expect.any(String),
            updates : updates
        })

        database.ref(`users/${uid}/expenses/${actions[0].id}`).once('value').then((dataSnapshot) => {
            expect(dataSnapshot.val().amount).toBe(9876);
            done();
        })
    })
});


test('should return the correct object from removeExpense', () => {
    const result = removeExpense(expenses[2].id);
    expect(result).toEqual({
        type : 'REMOVE_EXPENSE',
        id : expenses[2].id
    })
});

test('should remove the expense from redux mock store and database' , (done) => {
    const store = createMockStore(state);
    const id = expenses[1].id;

    store.dispatch(startRemoveExpense(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'REMOVE_EXPENSE',
            id : id
        })
        
        database.ref(`users/${uid}/expenses/${id}`).once('value').then((dataSnapshot) => {
            expect(dataSnapshot.val()).toBeNull();
            done();
        })
    })
});

test('should return the correct object from setExpenses', () => {
    const result = setExpenses([expenses[0] , expenses[2]]);
    expect(result).toEqual({
        type : 'SET_EXPENSES',
        expenses : [expenses[0],expenses[2]]
    })
});


test('should setExpenses to redux mock store read from database' , (done) => {
    const store = createMockStore(state);

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'SET_EXPENSES',
            expenses : expenses
        })
        
        database.ref(`users/${uid}/expenses`).once('value').then((dataSnapshot) => {
            const readExpenses = [];
            dataSnapshot.forEach((childSnapShot) => {
                readExpenses.push({
                    id : childSnapShot.key,
                    ...childSnapShot.val()
                })
            })

            expect(readExpenses).toEqual(expenses);
            done();
        })
    });
})