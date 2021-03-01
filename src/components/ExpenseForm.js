import React,{useState} from 'react';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';

export const ExpenseForm = ({onSubmit , expense}) => {
    const[description, setDescription] = useState(() => (expense) ? expense.description : '');
    const[amount, setAmount] = useState(() => (expense) ? (expense.amount / 100).toString() : '');
    const[note , setNote] = useState(() => (expense) ? expense.note : '');
    const[date, setDate] = useState(() => (expense) ? moment(expense.createdAt) : moment());
    const[focused, setFocused] = useState(false);
    const[error, setError] = useState('');
    
    const handleOnDescriptionChange = (e) => {
        const value = e.target.value;
        setDescription(value);
    };
    const handleOnAmountChange = (e) => {
        const value = e.target.value;
        if( !value || value.match(/^\d{1,}(\.\d{0,2})?$/)){
            setAmount(value);
        }
    };
    const handleOnNoteChange = (e) => {
        const value = e.target.value;
        setNote(value);
    }
    const handleOnDateChange = (date) => {
        setDate(date);
    };
    const handleOnFocusChanged = ({focused}) => {
        setFocused(focused)
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!(description && amount)){
            setError('description and amount are required.');
        } else {
            onSubmit({
                description : description,
                amount : parseFloat(amount * 100),
                note : note,
                createdAt : date.valueOf()
            })
        }
    };
    return (
        <form
        className = 'form'
        onSubmit = {handleFormSubmit}
        >
            {error && <p className = 'form__error'>{error}</p>}
            <input 
            className = 'text-input'
            type = 'text'
            placeholder = 'description...'
            name = 'descriptionInput'
            value = {description}
            onChange = {handleOnDescriptionChange}
            /> 
            <input
            className = 'text-input' 
            type = 'text'
            placeholder = 'amount...'
            name = 'amountInput'
            value = {amount}
            onChange = {handleOnAmountChange}
            /> 
            <SingleDatePicker
            id = 'singleDatePicker' 
            date = {date}
            onDateChange = {handleOnDateChange}
            focused = {focused}
            onFocusChange = {handleOnFocusChanged}
            showClearDate = {true}
            isOutsideRange = {() => false}
            numberOfMonths = {1}
            hideKeyboardShortcutsPanel = {true}
            readOnly = {true}
            />
            <textarea
            className = 'textarea'
            placeholder = 'note...'
            name = 'noteTextarea'
            value = {note}
            onChange = {handleOnNoteChange}
            >
            </textarea>
            <div>
                <button className = 'button'>{(expense) ? 'Edit Expense' : 'Add Expense'}</button>
            </div>                      
        </form>
    );
};

export default ExpenseForm;