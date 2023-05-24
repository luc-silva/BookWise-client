import { useEffect, useState } from "react";
import styles from "./BookDetailsTitleDisplay.module.css";

export const BookDetailsTitleDisplay = ({
    bookDetails,
}: {
    bookDetails: BookDetails;
}) => {
    let [statusStyle, setStatusStyle] = useState("");
    useEffect(() => {
        if (bookDetails.status === "Read") {
            setStatusStyle(styles["book--read"]);
        } else if (bookDetails.status === "Not Read") {
            setStatusStyle(styles["book--not-read"]);
        } else if (bookDetails.status === "dropped") {
            setStatusStyle(styles["book--dropped"]);
        }
    }, [bookDetails.status]);
    return (
        <>
            <div className={styles["title"]}>
                <h2>{bookDetails.title}</h2>
                <em>{`by ${bookDetails.book_author}`}</em>
            </div>
            <div className={styles["extra"]}>
                <p className={statusStyle}>{bookDetails.status}</p>
                <p>{`${bookDetails.pages} pages`}</p>
            </div>
        </>
    );
};
