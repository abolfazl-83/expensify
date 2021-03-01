const visibleExpenses = (expenses , {text , sortBy , endDate , startDate}) => {
    return expenses.filter((expense) => {
        const textMatch = (text.length === 0) ? true : expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = (startDate) ? startDate.isSameOrBefore(expense.createdAt , 'day'): true;
        const endDateMatch = (endDate) ? endDate.isSameOrAfter(expense.createdAt , 'day'): true;

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a , b) => {
        if(sortBy === 'date') {
            return (a.createdAt > b.createdAt ) ? -1 : 1;
        } else {
            return (a.amount < b.amount) ? -1 : 1;
        }
    })
}

export default visibleExpenses;