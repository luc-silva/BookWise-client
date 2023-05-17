import { BookCardInfoDisplay } from "../Display/BookCardInfoDisplay";
import styles from "./BookCard.module.css";
export const BookCard = () => {
    return (
        <div className={styles["book-card"]} >
            <div className={styles["book__image"]} >
                {/* <img src="" alt="" /> */}
            </div>
            <div  className={styles["book__basic-details"]} >
                <BookCardInfoDisplay />
            </div>
        </div>
    )
}