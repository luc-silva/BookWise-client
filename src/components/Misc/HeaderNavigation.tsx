import styles from "./HeaderNavigation.module.css";

export const HeaderNavigation = () => {
    return (
        <nav className={styles["header-navigation"]}>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
            </ul>
        </nav>
    );
};
