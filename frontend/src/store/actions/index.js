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