import React, {useState} from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {sortByDate , sortByAmount , setFilterText , setStartDate , setEndDate} from '../actions/filters';


export const ExpensesFilters = ({filters : {text , sortBy , startDate , endDate} ,setFilterText, sortByAmount, sortByDate , setStartDate , setEndDate}) => {
    const[focusedInput , setFocusedInput] = useState(null);

    const handleOnTextChange = (e) => {
        const value = e.target.value;
        setFilterText(value);
    };
    const handleOnSelectChange = (e) => {
        if(e.target.value === 'amount') {
            sortByAmount();
        } else {
            sortByDate()
        }
    }
    const handleOnDatesChange = ({startDate , endDate}) => {
        setStartDate(startDate);
        setEndDate(endDate)
    }
    const handleOnFocusChange = (focusedInput) => {
        setFocusedInput(focusedInput)
    }
    return (
        <div className = 'content-container'>
            <div className = 'input-group'>
                <div className = 'input-group__item'>
                    <input 
                        type = 'text'
                        className = 'text-input'
                        placeholder = 'search your expense...'
                        name = 'filterTextInput'
                        value = {text}
                        onChange = {handleOnTextChange}
                    />
                </div>
                <div className = 'input-group__item'>
                    <select
                    className = 'select'
                    value = {sortBy}
                    onChange = {handleOnSelectChange}
                    >
                         <option>date</option>
                         <option>amount</option>
                    </select>
                </div>
                <div className = 'input-group__item'>
                    <DateRangePicker 
                     startDate = {startDate}
                     endDate = {endDate}
                     onDatesChange = {handleOnDatesChange}
                     onFocusChange = {handleOnFocusChange}
                     focusedInput = {focusedInput}
                     numberOfMonths = {1}
                     hideKeyboardShortcutsPanel = {true}
                     isOutsideRange = {() => false}
                     readOnly = {true}
                     showClearDates = {true}
                     startDateId = '12345'
                     endDateId = '98765'
                    />                    
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterText : (text) => dispatch(setFilterText(text)),
        sortByDate : () => dispatch(sortByDate()),
        sortByAmount : () => dispatch(sortByAmount()),
        setStartDate : (startDate) => dispatch(setStartDate(startDate)),
        setEndDate : (endDate) => dispatch(setEndDate(endDate))
    }
};

export default connect(mapStateToProps , mapDispatchToProps)(ExpensesFilters);