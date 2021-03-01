import filtersReducer from '../../reducers/filters';
import moment from 'moment';

let state;
beforeEach(() => {
    state = {
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
})
test('should return the correct state after initilization' , () => {
    const result = filtersReducer( undefined , {type : '@@INIT'});

    expect(result).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    })
});

test('should return the correct state after textFilerAction' , () => {
    const result = filtersReducer( state , {type : 'SET_FILTER_TEXT' , text : 'Ahvaz'});
    expect(result.text).toBe('Ahvaz')
});

test('should return the correct state after setStartDate' , () => {
    const result = filtersReducer(state , {type : 'SET_START_DATE' , startDate : moment(0).add(5 , 'day')})
    expect(result.startDate).toEqual(moment(0).add(5 , 'day'))
})

test('should return the correct state after setEndDate' , () => {
    const result = filtersReducer(state , {type : 'SET_END_DATE' , endDate : moment(0).add(20 , 'day')})
    expect(result.endDate).toEqual(moment(0).add(20 , 'day'));
})

test('should return the correct state after sortByAmount' , () => {
    const result = filtersReducer(state , {type : 'SORT_BY_AMOUNT'});
    expect(result.sortBy).toEqual('amount')
});

test('should return the correct state after sortByDate' , () => {
    state = {
        ...state, 
        sortBy : 'amount'
    }
    const result = filtersReducer(state , {type : 'SORT_BY_DATE'});
    expect(result.sortBy).toBe('date')
});