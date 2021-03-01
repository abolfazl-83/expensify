import moment from 'moment';
const expenses = [
    {
        description : 'gas bill',
        amount : 540,
        createdAt : moment(0).add(5, 'day').valueOf(),
        note : 'october gas bill',
        id : '1'
    },
    {
        id : '2',
        description : 'water payment',
        amount : 20000,
        createdAt : moment(0).subtract(5, 'day').valueOf(),
        note : 'April water payment'

    },
    {        
        id : '3',
        description : 'bank loan',
        amount : 3200,
        createdAt : moment(0).add(10, 'day').valueOf(),
        note : ''
    }
];

export default expenses;