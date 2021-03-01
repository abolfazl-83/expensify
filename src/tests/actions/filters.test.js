import moment from 'moment';
import {
    setFilterText,
    setStartDate,
    setEndDate,
    sortByAmount,
    sortByDate
} from '../../actions/filters';

test('should return the correct object from setFilterText' , () => {
    const result = setFilterText('qwerty');
    expect(result).toEqual({
        type : 'SET_FILTER_TEXT',
        text : 'qwerty'
    })
})

test('should return the correct object from setFilterText with default' , () => {
    const result = setFilterText();
    expect(result).toEqual({
        type : 'SET_FILTER_TEXT',
        text : ''
    })
})

test('should return the correct object from setStartDate' , () => {
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type : 'SET_START_DATE',
        startDate : moment(0)
    })
});

test('should return the correct object from setEndDate', () => {
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type : 'SET_END_DATE',
        endDate : moment(0)
    })
})

test('should return the correct object from sortByAmout' , () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type : 'SORT_BY_AMOUNT'
    })
});

test('should return the correct object from sortByDate' , () => {
    const result = sortByDate();
    expect(result).toEqual({
        type : 'SORT_BY_DATE'
    })
});