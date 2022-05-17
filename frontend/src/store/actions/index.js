export const setAlert = (data) => {
    return {
        type: 'SET_ALERT',
        payload: data
    }
}

export const resetAlert = () => {
    return {
        type: 'RESET_ALERT'
    }
}

export const setLogin = () => {
    return {
        type: 'LOGIN'
    }
}

export const setLogout = () => {
    return {
        type: 'LOGOUT'
    }
}