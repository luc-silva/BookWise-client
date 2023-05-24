import styles from "./BookAboutDisplay.module.css";

export const BookAboutDisplay = ({
    bookDetails,
}: {
    bookDetails: FetchedBookDetails;
}) => {
    return (
        <>
            <div className={styles["tags"]}>
                <strong>Tags:</strong>
                <div>{bookDetails.tags}</div>
            </div>
            <div className={styles["description"]}>
                <strong>Description:</strong>
                <div>{bookDetails.description? bookDetails.description : "None provided."}</div>
            </div>
        </>
    );
};
