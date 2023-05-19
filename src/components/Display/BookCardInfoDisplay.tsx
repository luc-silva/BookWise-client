import styles from "./BookCardInfoDisplay.module.css";
export const BookCardInfoDisplay = () => {
    return (
        <>
            <div className={styles["display__title"]}>
                <strong>Dom Quixote</strong>
            </div>
            <div className={styles["display__tags"]}>
                <em>Fiction</em>
            </div>
            <div className={styles["display__book-status"]}>
                <p>Not Read</p>
                <p>added: 10/21/3234</p>
            </div>
        </>
    );
};
