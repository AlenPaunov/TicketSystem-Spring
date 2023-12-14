import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRouth({ children }) {
    const user = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRouth;
