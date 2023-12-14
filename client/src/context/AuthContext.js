import { createContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    function login(data) {
        setUser(data);
        navigate("/");
    }

    function logout() {
        setUser(null);
        navigate("/login", { replace: true });
    }

    const auth = useMemo(() => {
        return {
            user,
            login,
            logout,
        };
    }, [user]);

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
