import { useEffect, useState } from "react";
import { ImageContainer } from "../Containers/ImageContainer";
import { BookCardInfoDisplay } from "../Display/BookCardInfoDisplay";
import styles from "./BookCard.module.css";

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
        <a className={styles["book-card"]} target="_self" href="">
            <div className={styles["book__image"]}>
                <ImageContainer imageObject={""} />
            </div>
            <div className={styles["book__basic-details"]}>
                <BookCardInfoDisplay />
            </div>
        </a>
    );
};
