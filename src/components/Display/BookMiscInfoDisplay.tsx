import { format } from "date-fns";
import styles from "./BookMiscInfoDisplay.module.css";

export const BookMiscInfoDisplay = ({
    bookDetails,
}: {
    bookDetails: FetchedBookDetails;
}) => {
    return (
        <>
            <div className={styles["date"]}>
                <strong>Date Criated:</strong>
                <p>{format(new Date(bookDetails.updatedAt), "dd/MM/yyyy")}</p>
            </div>
            <div className={[styles["date"], styles["date-updated"]].join(" ")}>
                <strong>Last Time Updated:</strong>
                <p>{format(new Date(bookDetails.createdAt), "dd/MM/yyyy")}</p>
            </div>
            <div className={styles["id"]}>
                <em>id:{bookDetails._id}</em>
            </div>
        </>
    );
};
