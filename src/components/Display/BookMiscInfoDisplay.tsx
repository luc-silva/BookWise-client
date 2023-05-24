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
                <p>12/312/32</p>
            </div>
            <div className={[styles["date"], styles["date-updated"]].join(" ")}>
                <strong>Last Time Updated:</strong>
                <p>12/312/32</p>
            </div>
            <div className={styles["id"]}>
                <em>id:{bookDetails._id}</em>
            </div>
        </>
    );
};
