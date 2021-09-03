import React, { useContext } from 'react'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{test: "context is working"}}>
            { children }
        </AuthContext.Provider>
    )
}
