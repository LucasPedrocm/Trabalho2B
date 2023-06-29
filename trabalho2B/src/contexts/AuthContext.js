import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export function AuthProvider({ children }){

    const [logado, setLogado] = useState(false);
    const [loading, setLoading] = useState(false);

    function singIn(){
        return new Promise(resolve => { 
            setLoading(true);
            setTimeout(function(){
                setLogado(true);
                setLoading(false);
            }, 2000)
        })
    }

    return (
        <AuthContext.Provider value = {{logado, singIn, loading}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;