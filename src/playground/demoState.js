const demoState = {
    expenses : [
        {
            id : 'jasgdasd123assd',
            description : 'gas bill',
            amount : 816323,    //will be shown like => 8163.23
            createdAt : 12523783,    // will be not a moment object. but the moment.valueOf()
            note : 'october gas bill'
        },
        {
            id : 'ashdajhdasjdashj1723',
            description : 'water payment',
            amount : 6513,    //will be shown like => 8163.23
            createdAt : 8713612313,    // will be not a moment object. but the moment.valueOf()
            note : 'september water payment'
        }
    ],
    filters : {
        text : 'bill',
        startDate : moment(),   
        endDate : moment(),
        sortBy : 'date'  // default is date , can be amount too
    }
};