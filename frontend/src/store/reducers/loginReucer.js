let initialState = localStorage.getItem('token')?true:false;
const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true;

        case 'LOGOUT':
            return false;
        
            default:
            return state;
    }
}

export default loginReducer;