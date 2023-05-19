import { BookCard } from "../Cards/BookCard";
import styles from "./BookshelfContainer.module.css";

export const BookshelfContainer = ({ userToken }: { userToken: string }) => {
    let bookArr = ["", "", "", "", "", "", ""];
    return (
        <div className={styles["bookshelf-container"]}>
            {bookArr.map((id, index: React.Key) => {
                return (
                    <BookCard key={index} bookId={id} userToken={userToken} />
                );
            })}
        </div>
    );
};
