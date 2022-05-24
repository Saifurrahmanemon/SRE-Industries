import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

function RequireAuth({ children }) {
    let [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (error) {
        return error.message;
    }
    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;
