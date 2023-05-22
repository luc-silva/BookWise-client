import { NavLink } from "react-router-dom";
import { Plus } from "phosphor-react";
import styles from "./AddBookCard.module.css";

export const AddBookCard = () => {
    return (
        <NavLink className={styles["add-book-card"]} target="_self" to="/add">
            <Plus size={50} weight="bold"  />
            Add a book
        </NavLink>
    );
};
