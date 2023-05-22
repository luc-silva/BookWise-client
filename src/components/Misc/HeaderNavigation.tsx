import { Link } from "react-router-dom";
import styles from "./HeaderNavigation.module.css";
import { NavLink } from "react-router-dom";

export const HeaderNavigation = () => {
    return (
        <nav className={styles["header-navigation"]}>
            <ul>
                <li>
                    <NavLink to={"bookshelf"}>Bookshelf</NavLink>
                </li>
                <li>
                    <NavLink to={"add"}>Add Book</NavLink>
                </li>
                <li>
                    <a href="https://github.com/luc-silva">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/silva-luc/">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </nav>
    );
};
