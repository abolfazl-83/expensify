import React from 'react';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const CreateExpense = ({startAddExpense , history}) => {
    const handleOnSubmit = ({ description , amount , note , createdAt}) => {
        startAddExpense({
            description,
            note,
            amount,
            createdAt
        })
        history.push('/')
    };
    return (
        <div>
            <div className = 'page-header'>
                <div className = 'content-container'>
                    <h1 className = 'page-heaer__title'>Add Expense</h1>
                </div>
            </div>
            <div className = 'content-container'>
                <ExpenseForm 
                 onSubmit = {handleOnSubmit}
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense : (expense) => dispatch(startAddExpense(expense))
    }
};

export default connect(undefined , mapDispatchToProps)(CreateExpense);