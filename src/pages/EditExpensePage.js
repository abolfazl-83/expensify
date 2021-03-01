import React from 'react';
import EditExpense from '../components/EditExpense';

export const EditExpensePage = (props) => {
    return (
        <React.Fragment>
            <EditExpense {...props}/>
        </React.Fragment>
    );
};

export default EditExpensePage;