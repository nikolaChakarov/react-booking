import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    error: false,
    reservationInfo: {
        city: undefined,
        dates: [],
        options: {
            adult: undefined,
            children: undefined,
            room: undefined
        }
    }
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return <AuthContext.Provider value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        reservationInfo: state.reservationInfo,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>
}