import * as actions from '../../actions/auth';

test('should build login action', () => {
    const expectedUid = '123ABC';
    const action = actions.login(expectedUid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: expectedUid
    });
});

test('should build logout action', ()=> {
    const action = actions.logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});