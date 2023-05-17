import styles from "./BookDetailsTitleDisplay.module.css";

export const BookDetailsTitleDisplay = () => {
    return (
        <>
            <div className={styles["title"]}>
                <h2>Helena</h2>
                <em>by Machado de Assis</em>
            </div>
            <div className={styles["extra"]}>
                <p>Not Read</p>
                <p>487 pages</p>
            </div>
        </>
    );
};
