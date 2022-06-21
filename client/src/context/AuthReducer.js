const AuthReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN_START":
			return {
				...state,
				isLoading: true,
			};

		case "SUCCESS_LOGIN":
			return {
				...state,
				user: action.payload,
				isLoading: false,
				error: false,
			};
		case "FAILURE_LOGIN":
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
				isLoading: false,
				error: false,
			};

		case "NEW_SEARCH":
			return {
				...state,
				// searchOptions: JSON.parse(JSON.stringify(action.payload))
				searchOptions: action.payload,
			};

		case "RESET_SEARCH":
			return {
				...state,
				searchOptions: {
					city: undefined,
					dates: [],
					options: {
						adult: undefined,
						children: undefined,
						room: undefined,
					},
				},
			};

		default:
			return state;
	}
};

export default AuthReducer;
