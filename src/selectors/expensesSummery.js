const expensesSummery = (expenses) => {
    if(expenses.length === 0){
        return {
            expensesCount : 0,
            expensesTotal : 0
        };
    } else {
        return {
            expensesCount : expenses.length,
            expensesTotal : expenses.map((expense) => {
                return expense.amount;
            }).reduce((sum , value) => {
                return sum + value;
            } , 0)
        }
    }
};

export default expensesSummery;