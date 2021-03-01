import moment from 'moment';
import visibleExpenses from '../../selectors/visibleExpenses';
import expenses from '../fixtures/expenses';


test('should return the correct expenses with the specefic filterText' , () => {
    const filters = {
        text : 'gas',
        sortBy : 'date',
        startDate : null,
        endDate : null
    };

    const result = visibleExpenses(expenses , filters);
    expect(result).toEqual([expenses[0]])
});

test('should return the correct expenses with the specefic filterText with CapitalLetter' , () => {
    const filters = {
        text : 'WAteR',
        sortBy : 'date',
        startDate : null,
        endDate : null
    };

    const result = visibleExpenses(expenses , filters);
    expect(result).toEqual([expenses[1]]);
});

test('should return multiple expenses sorted by amount based on the specefic filterText' , () => {
    const filters = {
        text : 'WAteR',
        sortBy : 'amount',
        startDate : null,
        endDate : null
    };

    const manipulatedExpenses = [
        ...expenses,
        {
            description : 'water bill',
            amount : 1000,
            createdAt : moment(0).add(8, 'day').valueOf(),
            note : 'october gas bill',
            id : '1'
        }
    ];

    const result = visibleExpenses(manipulatedExpenses , filters);
    expect(result).toEqual([{
        description : 'water bill',
        amount : 1000,
        createdAt : moment(0).add(8, 'day').valueOf(),
        note : 'october gas bill',
        id : '1'
    }, expenses[1]])
});

test('should return the correct sorted expenses with sortBy = date' , () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : null,
        endDate : null
    };

    const result = visibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2] , expenses[0] , expenses[1]])
})

test('should return the correct sorted expenses with sortBy = amount', () => {
    const filters = {
        text : '',
        sortBy : 'amount',
        startDate : null,
        endDate : null
    };

    const result = visibleExpenses(expenses , filters);
    expect(result).toEqual([expenses[0] , expenses[2] , expenses[1]])
})

test('should return the correct sorted expenses with startDate defined!' , () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0).add(6 , 'day'),
        endDate : moment().add(125,'day')
    };

    const result = visibleExpenses(expenses , filters);
    expect(result).toEqual([expenses[2]])
});

test('should return the correct sorted expenses with endDate defined!' , () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0).add(4 , 'day'),
        endDate : moment(0).add(7 , 'day')
    };

    const result = visibleExpenses(expenses , filters);
    expect(result).toEqual([expenses[0]])
});

test('should return the correct sorted expenses with endDate defined ( putting startDate the same day as expense createdAt)!' , () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0).add(10 , 'day'),
        endDate : moment(0).add(15 , 'day')
    };

    const result = visibleExpenses(expenses , filters);
    expect(result).toEqual([expenses[2]])
});