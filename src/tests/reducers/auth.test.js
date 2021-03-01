import authReducer from '../../reducers/auth';


let state;
beforeEach(() => {
    state = {};
})

test('should return the correct state after initilization phase' , () => {
    const result = authReducer(undefined , {type : '@@INIT'});
    expect(result).toEqual({});
});

test('should return the correct state after Login' , () => {
    const result = authReducer(state , {type : 'LOGIN' , uid : 'asdf1234'});
    expect(result).toEqual({
        uid : 'asdf1234'
    })
});

test('should return the correct state after logout' , () => {
    state = {
        uid : 'asdfg12345'
    }

    const result = authReducer(state, {type : 'LOGOUT'});
    expect(result).toEqual({})
});