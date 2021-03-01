import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => {
    return {
        type : 'ADD_EXPENSE',
        expense
    }
};
export const startAddExpense = ({description , amount = 0 , note = '' , createdAt = 0} = {}) => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        const expense = {
            description,
            amount,
            note,
            createdAt
        };
        return database.ref(`users/${uid}/expenses`).push(expense).then((snapshot) => {
            dispatch(addExpense({
                id : snapshot.key,
                ...expense
            }))
        })
    };
};
export const editExpense = (id , updates) => {
    return {
        type : 'EDIT_EXPENSE',
        id,
        updates
    }
};

export const startEditExpense = (id , updates) => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id , updates))
        });
    }
};

export const removeExpense = (id) => {
    return {
        type : 'REMOVE_EXPENSE',
        id
    }
};

export const startRemoveExpense = (id) => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id))
        })
    }
};

export const setExpenses = (expenses) => {
    return {
        type : 'SET_EXPENSES',
        expenses
    }
}

export const  startSetExpenses = () => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((dataSnapshot) => {
            const expenses = [];

            dataSnapshot.forEach((childSnapshot) => {
                expenses.push({
                    id : childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        });
    }
};