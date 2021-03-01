import {login , logout} from '../../actions/auth';

test('should return the correct object from login' , () => {
    const result = login('asdfg12345');
    expect(result).toEqual({
        type : 'LOGIN',
        uid : 'asdfg12345'
    })
});

test('should return the correct object from logout' , () => {
    const result = logout();
    expect(result).toEqual({
        type : 'LOGOUT'
    });
})