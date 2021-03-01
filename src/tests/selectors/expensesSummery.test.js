import expensesSummery from '../../selectors/expensesSummery';
import expenses from '../fixtures/expenses';

test('testing expensesSummery with 0 expenses sent', () => {
    const result = expensesSummery([]);
    expect(result).toEqual({
        expensesCount : 0,
        expensesTotal : 0
    })
});

test('testing expensesSummery with 1 expense sent' , () => {
    const result = expensesSummery([expenses[1]]);
    expect(result).toEqual({
        expensesCount : 1,
        expensesTotal : 20000
    })
});

test('testing expensesSummery with multiple expenses' , () => {
    const result = expensesSummery(expenses);
    expect(result).toEqual({
        expensesCount : 3,
        expensesTotal : 23740
    })
})