import { useEffect, useState } from "react";
import { AddBookCard } from "../Cards/AddBookCard";
import { BookCard } from "../Cards/BookCard";
import styles from "./BookshelfContainer.module.css";
import UserService from "../../Services/UserService";

export const BookshelfContainer = ({ userToken }: { userToken: string }) => {
    let [bookArr, setBookArr] = useState([]);

    useEffect(() => {
        if (userToken) {
            UserService.getUserBooks(userToken).then(setBookArr).catch(() => {
                console.log("Something went wrong.")
            });
        }
    }, [userToken]);

    return (
        <div className={styles["bookshelf-container"]}>
            {bookArr.map(({_id}, index: React.Key) => {
                return (
                    <BookCard key={index} bookId={_id} userToken={userToken} />
                );
            })}
            {bookArr.length > 8 && <AddBookCard />}
        </div>
    );
};
