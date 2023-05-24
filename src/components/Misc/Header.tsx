import { SignOut } from "phosphor-react";
import { AppLogo } from "./AppLogo";
import styles from "./Header.module.css";
import { HeaderNavigation } from "./HeaderNavigation";
import { useNavigate } from "react-router-dom";
import { userSessionDefaultValues } from "../../constants/defaultValues";

export const Header = ({ user,setUser }: { user: UserSession, setUser:Function }) => {
    let navigate = useNavigate()

    function logOut(){
        setUser(userSessionDefaultValues)
        navigate("/login")
    }
    return (
        <header className={styles["header"]}>
            <div className={styles["header__logo"]}>
                <AppLogo />
            </div>
            <div className={styles["header__side-panel"]}>
                <div className={styles["header__navigation"]}>
                    <HeaderNavigation />
                </div>
                {user.isLogged && (
                    <div className={styles["header__log-out"]}>
                        <button className={styles["header__log-out-btn"]} onClick={() => {
                            logOut()
                        }}>
                            Log out
                            <SignOut size={20} weight="bold" />{" "}
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};
