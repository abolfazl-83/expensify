import React from 'react';
import CreateExpense from '../components/CreateExpense';

export const CreateExpensePage = (props) => {
    return (
        <React.Fragment>
            <CreateExpense {...props}/>
        </React.Fragment>
    );
};

export default CreateExpensePage;