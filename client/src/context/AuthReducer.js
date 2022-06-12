const AuthReducer = (state, action) => {

    switch (action.type) {

        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }

        case 'SUCCESS_USER_AUTH':
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: false
            }
        case 'FAILURE_USER_AUTH':
            return {
                ...state,
                error: true,
                isLoading: false
            }

        default:
            return state;
    }

};

export default AuthReducer;