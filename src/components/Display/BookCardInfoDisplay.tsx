import { useEffect } from "react";
import styles from "./BookCardInfoDisplay.module.css";
export const BookCardInfoDisplay = ({
    bookDetails,
}: {
    bookDetails: BookDetails;
}) => {
    useEffect(() => {
        console.log(bookDetails);
    }, [bookDetails]);
    return (
        <>
            <div className={styles["display__title"]}>
                <strong>{bookDetails.title}</strong>
            </div>
            <div className={styles["display__footer"]}>
                <div className={styles["display__tags"]}>
                    <em>{bookDetails.tags}</em>
                </div>
                <div className={styles["display__book-status"]}>
                    <strong>{bookDetails.status}</strong>
                    <p>added: 10/21/3234</p>
                </div>
            </div>
        </>
    );
};
