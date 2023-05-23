import { useEffect, useState } from "react";
import { ImageContainer } from "../Containers/ImageContainer";
import { BookCardInfoDisplay } from "../Display/BookCardInfoDisplay";
import styles from "./BookCard.module.css";
import { NavLink } from "react-router-dom";
import BookService from "../../Services/BookService";
import { bookCardDefaultValues } from "../../constants/defaultValues";

export const BookCard = ({
    bookId,
    userToken,
}: {
    bookId: string;
    userToken: string;
}) => {
    let [bookDetails, setBookDetails] = useState(bookCardDefaultValues)
    let bookInitialState = useState()
    useEffect(() => {
        if(bookId){
            BookService.getBookDetails(bookId, userToken).then((data) => {
                setBookDetails(data)
            })
        }
    }, [bookId, userToken]);
    return (
        <NavLink className={styles["book-card"]} target="_self" to={`/book/${bookDetails._id}`}>
            <div className={styles["book__image"]}>
                <ImageContainer imageObject={""} />
            </div>
            <div className={styles["book__basic-details"]}>
                <BookCardInfoDisplay bookDetails={bookDetails}/>
            </div>
        </NavLink>
    );
};
