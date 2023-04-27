const initState = {
    burgerActive: false,
};

const burgerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'TEST':
            return {...state}
        default:
            return {...state}
    }
}

export default burgerReducer;