import React from 'react';
import {connect} from 'react-redux';
import {startEditExpense , startRemoveExpense} from '../actions/expenses';
import ExpenseForm from '../components/ExpenseForm';

export const EditExpense = ({expense , startEditExpense , history, startRemoveExpense}) => {
    
    const handleOnSubmit = (updates) => {
        startEditExpense(expense.id , updates)
        history.push('/')
    }
    const handleOnRemove = () => {
        startRemoveExpense(expense.id);
        history.push('/')
    };
    return (
        <div>
            <div className = 'page-header'>
                <div className = 'content-container'>
                    <h1 className = 'page-header__title'>Edit Expense</h1>
                </div>
            </div>
            <div className = 'content-container'>
                <ExpenseForm 
                    expense = {expense}
                    onSubmit = {handleOnSubmit}
                />
                <button
                className = 'button button-secondary'
                onClick = {handleOnRemove}
                >
                Remove Expense
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = (state, props) => {
    return {
        expense : state.expenses.find((expense) => {
            return expense.id === props.match.params.expenseId
        })
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense : (id , updates) => dispatch(startEditExpense(id , updates)),
        startRemoveExpense : (id) => dispatch(startRemoveExpense(id))
    }
};

export default connect(mapStateToProps , mapDispatchToProps)(EditExpense);