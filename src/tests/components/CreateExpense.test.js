import React from 'react';
import {shallow} from 'enzyme';
import {CreateExpense} from '../../components/CreateExpense';
import expenses from '../fixtures/expenses';

let wrapper, startAddExpense, history;
beforeEach(() => {
    startAddExpense = jest.fn();
    history = {
        push : jest.fn()
    };
    wrapper = shallow(<CreateExpense 
        startAddExpense = {startAddExpense}
        history = {history}
        />)     
});

test('should render CreateExpense Correctly' , () => {
    expect(wrapper).toMatchSnapshot();
});

test('should run the correct prop on onSubmit' , () => {
    const expense = {
        description : expenses[0].description,
        amount : expenses[0].amount,
        note : expenses[0].note,
        createdAt : expenses[0].createdAt,
    }
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(startAddExpense).toHaveBeenLastCalledWith(expense);
    expect(history.push).toHaveBeenLastCalledWith('/')
});
