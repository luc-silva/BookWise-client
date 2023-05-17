import { BookshelfContainer } from "../components/Containers/BookshelfContainer";
import styles from "./Bookshelf.module.css";

export const Bookshelf = () => {
    return (
        <main className={styles["bookshelf"]}>
            <div className={styles["bookshelf__main"]}>
                <div className={styles["bookshelf__main__title"]}>
                    <h2>Bookshelf</h2>
                </div>
            </div>
            <div className={styles["bookshelf__button-panel"]}>
                <button className="add-book-popup-btn">Add</button>
            </div>
            <section className="bookshelf__container">
                <BookshelfContainer />
            </section>
        </main>
    );
};
