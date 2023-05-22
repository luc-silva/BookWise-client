import { AppLogo } from "./AppLogo";
import styles from "./Header.module.css";
import { HeaderNavigation } from "./HeaderNavigation";

export const Header = ({ user }: { user: UserSession }) => {
    return (
        <header className={styles["header"]}>
            <div className={styles["header__logo"]}>
                <AppLogo />
            </div>
            <div>
                <HeaderNavigation />
            </div>
        </header>
    );
};
