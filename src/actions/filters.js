export const setFilterText = (text = '') => {
    return {
        type : 'SET_FILTER_TEXT',
        text
    };
};

export const setStartDate = (startDate) => {
    return {
        type : 'SET_START_DATE',
        startDate
    };
};

export const setEndDate = (endDate) => {
    return {
        type : 'SET_END_DATE',
        endDate
    };
};

export const sortByDate = () => {
    return {
        type : 'SORT_BY_DATE'
    };
};

export const sortByAmount = () => {
    return {
        type : 'SORT_BY_AMOUNT'
    };
};