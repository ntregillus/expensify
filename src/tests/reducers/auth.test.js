import authReducer from '../../reducers/auth';


test('should set default authReducer state', () => {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
});

test('should set user state on login', () => {
    const state = authReducer({}, {type:'LOGIN', uid: '123ABC'});
    expect(state).toEqual({
        uid: '123ABC'
    });
});

test('should unset uid from state on logout', () => {
    const state = authReducer({uid:'123ABC' }, {type:'LOGOUT'});
    expect(state).toEqual({});
});

