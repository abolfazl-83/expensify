import React from 'react';
import ExpensesList from '../components/ExpensesList';
import ExpensesSummery from '../components/ExpensesSummery';
import ExpensesFilters from '../components/ExpensesFilters';

export const DashboardPage = () => {
    return (
        <div>
            <ExpensesSummery />
            <ExpensesFilters />
            <ExpensesList />
        </div>
    );
};

export default DashboardPage;