import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
	user: localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user"))
		: null,
	isLoading: false,
	error: false,
	reservationInfo: {
		city: undefined,
		dates: [],
		options: {
			adult: undefined,
			children: undefined,
			room: undefined,
		},
	},
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(state.user));
	}, [state.user]);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isLoading: state.isLoading,
				error: state.error,
				reservationInfo: state.reservationInfo,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
