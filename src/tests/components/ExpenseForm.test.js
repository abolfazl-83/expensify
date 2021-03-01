import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseForm} from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { now } from 'moment';


let wrapper, onSubmit, expense;
beforeEach(() => {
    expense = expenses[0];
    onSubmit = jest.fn();
    wrapper = shallow(<ExpenseForm 
         expense = {expense}
         onSubmit = {onSubmit}
        />)
});

test('should render ExpenseForm correctly with expense existing', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with no expense provided!', () => {
    wrapper = shallow(<ExpenseForm onSubmit = {onSubmit}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should change the state on handleOnDescriptionChange' , () => {
    wrapper.find('input').at(0).simulate('change', {
        target : { value : 'testDescription' }
    });
    expect(wrapper.find('input').at(0).prop('value')).toEqual('testDescription');
});

//should not set it to testAmuount cause of regx.
test('should change the state on handleOnAmountChange with unvalid input', () => {
    wrapper.find('input').at(1).simulate('change', {
        target : { value : 'testAmount'}
    });

    expect(wrapper.find('input').at(1).prop('value')).toEqual('5.4')
});

test('should change the state on handleOnAmountChange with valid input', () => {
    wrapper.find('input').at(1).simulate('change', {
        target : { value : '54.23'}
    })

    expect(wrapper.find('input').at(1).prop('value')).toEqual('54.23')
});

test('should change the state on handleOnNoteChange', () => {
    wrapper.find('textarea').simulate('change', {
        target : { value : 'testNote'}
    })

    expect(wrapper.find('textarea').prop('value')).toEqual('testNote')
})

test('should change the setDate state on handleOnDateChange' , () => {
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(moment(0).add(2, 'day'));

    expect(wrapper.find('withStyles(SingleDatePicker)').prop('date')).toEqual(moment(0).add(2 , 'day'));
});

test('should change the setFocused state on handleOnFocusChanged', () => {
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused : true});
    
    expect(wrapper.find('withStyles(SingleDatePicker)').prop('focused')).toEqual(true)
})

test('should call onSubmit with the right arguments on handleOnSubmit and all valid inputs with already expenses[0] provided though', () => {
    wrapper.find('input').at(0).simulate('change', {
        target : { value : 'qwerty'}
    })
    wrapper.find('input').at(1).simulate('change', {
        target : {value : '123.45'}
    });

    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });

    expect(onSubmit).toHaveBeenLastCalledWith({
        description : 'qwerty',
        amount : 12345,
        note : 'october gas bill',
        createdAt :moment(0).add(5, 'day').valueOf()
    })
});

test('should error correctly when description not provided', () => {
    wrapper.find('input').at(0).simulate('change', {        //because we already have expenses[0].description in input, we empty it
        target : { value : ''}
    });
    wrapper.find('input').at(1).simulate('change', {
        target : { value : '123.45'}
    })
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    })

    expect(wrapper.find('h2').html()).toEqual('<h2>description and amount are required.</h2>');
});

test('should error correctly when amount not provided.', () => {
    wrapper.find('input').at(0).simulate('change', {
        target : { value : 'qwerty'}
    });
    wrapper.find('input').at(1).simulate('change', {
        target : { value : ''}
    });
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    })

    expect(wrapper.find('h2').html()).toEqual('<h2>description and amount are required.</h2>')
});

test('should error correctly if both description and amount not provided!', () =>{
    wrapper.find('input').at(0).simulate('change', {
        target : { value : ''}
    });
    wrapper.find('input').at(1).simulate('change', {
        target : { value : ''}
    });
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    })
    expect(wrapper.find('h2').html()).toEqual('<h2>description and amount are required.</h2>');
});