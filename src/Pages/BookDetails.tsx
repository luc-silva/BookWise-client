import { Button } from "../components/Buttons/Button";
import { BookDetailsTitleDisplay } from "../components/Display/BookDetailsTitleDisplay";
import styles from "./BookDetails.module.css";

export const BookDetails = () => {
    return (
        <main className={styles["book-details"]}>
            <aside className={styles["book__aside-info"]}>
                <div className={styles["book__image__container"]}>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className={styles["book__external-links"]}>
                    <Button onClick={() => {}} text="Edit" type="action" />
                    <Button onClick={() => {}} text="Buy on Amazon" type="remove" />
                </div>
                <div className={styles["book__misc"]}>

                </div>
            </aside>

            <section className={styles["book-details__main"]}>
                <div className="book-basic-information">
                    <BookDetailsTitleDisplay />
                </div>

                <div className={styles["button-panel"]}>
                    <Button onClick={() => {}} text="Delete" type="remove" />
                </div>
            </section>
        </main>
    );
};
