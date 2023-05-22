import { useEffect, useState } from "react";
import { ImageContainer } from "../Containers/ImageContainer";
import { BookCardInfoDisplay } from "../Display/BookCardInfoDisplay";
import styles from "./BookCard.module.css";
import { NavLink } from "react-router-dom";

export const BookCard = ({
    bookId,
    userToken,
}: {
    bookId: string;
    userToken: string;
}) => {
    let bookInitialState = useState()
    useEffect(() => {
        
    }, [bookId, userToken]);
    return (
        <NavLink className={styles["book-card"]} target="_self" to="">
            <div className={styles["book__image"]}>
                <ImageContainer imageObject={""} />
            </div>
            <div className={styles["book__basic-details"]}>
                <BookCardInfoDisplay />
            </div>
        </NavLink>
    );
};
