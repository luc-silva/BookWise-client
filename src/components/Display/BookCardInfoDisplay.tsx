import { useEffect } from "react";
import styles from "./BookCardInfoDisplay.module.css";
import { format } from "date-fns";
export const BookCardInfoDisplay = ({
    bookDetails,
}: {
    bookDetails: BookDetails;
}) => {
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
                    <p>{`Released:${format(
                        new Date(bookDetails.released_date),
                        "dd/MM/yyyy"
                    )}`}</p>
                </div>
            </div>
        </>
    );
};
