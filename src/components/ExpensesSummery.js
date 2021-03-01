import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import expensesSummery from '../selectors/expensesSummery';
import visibleExpenses from '../selectors/visibleExpenses';


export const ExpensesSummery = ({expensesSummeryResult : {expensesCount , expensesTotal}}) => {

    const expensesWord = (expensesCount === 1) ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className = 'page-header'>
            <div className = 'content-container'>
                <h1 className = 'page-header__title'>viewing <span>{expensesCount}</span> {expensesWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className = 'page-header__actions'>
                    <Link
                    className = 'button'
                    to = '/create'
                    >Add Expense</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expensesSummeryResult : expensesSummery(visibleExpenses(state.expenses, state.filters))
    }
};

export default connect(mapStateToProps)(ExpensesSummery);