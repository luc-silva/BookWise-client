//functions and helpers
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { createImageBlob } from "../../utils/tools";
import ImageService from "../../Services/ImageService";
import BookService from "../../Services/BookService";

//components
import { ImageContainer } from "../Containers/ImageContainer";
import { BookCardInfoDisplay } from "../Display/BookCardInfoDisplay";

//misc
import { bookCardDefaultValues } from "../../constants/defaultValues";
import styles from "./BookCard.module.css";

export const BookCard = ({
    bookId,
    userToken,
}: {
    bookId: string;
    userToken: string;
}) => {
    let [bookData, setBookData] = useState(bookCardDefaultValues);
    let [image, setImage] = useState("");

    useEffect(() => {
        if (bookId) {
            BookService.getBookDetails(bookId, userToken).then(
                (data: FetchedBookDetails) => {
                    setBookData(data);
                    setImage(createImageBlob(data.image.buffer.data));
                }
            );
        }
    }, [bookId, userToken]);

    return (
        <NavLink
            className={styles["book-card"]}
            target="_self"
            to={`/book/${bookData.bookDetails._id}`}
        >
            <div className={styles["book__image"]}>
                <ImageContainer imageObject={image} />
            </div>
            <div className={styles["book__basic-details"]}>
                <BookCardInfoDisplay bookDetails={bookData.bookDetails} />
            </div>
        </NavLink>
    );
};
