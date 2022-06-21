const AuthReducer = (state, action) => {

    switch (action.type) {

        case 'LOADING':
            return {
                ...state,
                isLoading: true
            };

        case 'SUCCESS_USER_AUTH':
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: false
            };
        case 'FAILURE_USER_AUTH':
            return {
                ...state,
                error: true,
                isLoading: false
            };

        case 'NEW_SEARCH':
            return {
                ...state,
                hotel: JSON.parse(JSON.stringify(action.payload))
            };

        case 'RESET_SEARCH':
            return {
                ...state,
                hotel: {
                    city: undefined,
                    dates: [],
                    options: {
                        adult: undefined,
                        children: undefined,
                        room: undefined
                    }
                }
            }

        default:
            return state;
    }

};

export default AuthReducer;