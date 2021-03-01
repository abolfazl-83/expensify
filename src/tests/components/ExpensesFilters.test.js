import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import {ExpensesFilters} from '../../components/ExpensesFilters';

let wrapper,setFilterText,sortByDate,sortByAmount,setStartDate,setEndDate,filters;
beforeEach(() => {
    setFilterText = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    
    filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0).startOf('month'),
        endDate : moment(0).endOf('month') 
    };

    wrapper = shallow(<ExpensesFilters 
         setFilterText = {setFilterText}
         sortByDate = {sortByDate}
         sortByAmount = {sortByAmount}
         setStartDate = {setStartDate}
         setEndDate = {setEndDate}
         filters = {filters}
        />
    );
});

test('should render the ExpensesFilters correctly with auto Provided filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render the ExpensesFilters correctly with altFilters', () => {
    wrapper.setProps({
        filters : {
            text : 'yazd',
            sortBy : 'amount',
            startDate : moment(0).startOf('week'),
            endDate : moment(0).endOf('week')
        }
    })

    expect(wrapper).toMatchSnapshot();
});

test('should dispatch setFilterText with right argument on handleOnTextChange', () => {
    wrapper.find('input').simulate('change', {
        target : { value : 'qwerty'}
    });
    expect(setFilterText).toHaveBeenLastCalledWith('qwerty')
});

test('should dispatch sortByAmount on handleOnSelectChange if amount option selected', () => {
    wrapper.find('select').simulate('change', {
        target : { value : 'amount'}
    });

    expect(sortByAmount).toHaveBeenCalled();
});

test('should dispatch sortByDate on handleOnSelectChange if date option selected', () => {
    wrapper.find('select').simulate('change', {
        target : { value : 'date'}
    });

    expect(sortByDate).toHaveBeenCalled();
});

test('should dispatch setStartDate and setEndDate on handleOnDatesChange', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate : moment(0).add(5 , 'month'), endDate : moment(0).add(10 , 'month')});
    expect(setStartDate).toHaveBeenLastCalledWith(moment(0).add(5 , 'month'));
    expect(setEndDate).toHaveBeenLastCalledWith(moment(0).add(10 , 'month'))
});

test('should update the state on handleOnFocusChange', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')("startDate");
    
    expect(wrapper.find('withStyles(DateRangePicker)').prop('focusedInput')).toEqual('startDate');
});