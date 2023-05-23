import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectUser = ({ user }: { user: UserSession }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.isLogged) {
            navigate("/login");
        }
    }, [user.isLogged]);

    return null;
};
