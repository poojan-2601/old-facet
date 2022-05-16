const alertReducer = (state={"show": false}, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return {"show": true, ...action.payload}
    
        case 'RESET_ALERT':
            return {"show": false}
            
        default:
            return state;
    }
}

export default alertReducer;