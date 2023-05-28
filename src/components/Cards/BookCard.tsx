//functions and helpers
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { createImageBlob } from "../../utils/tools";
import BookService from "../../Services/BookService";

//components
import { ImageContainer } from "../Containers/ImageContainer";
import { BookCardInfoDisplay } from "../Display/BookCardInfoDisplay";

//misc
import { bookDataInitialValues, componentStatusInitialValues } from "../../constants/defaultValues";
import styles from "./BookCard.module.css";
import { LoadingOverlay } from "../Loading/LoadingOverlay";

export const BookCard = ({
    bookId,
    userToken,
}: {
    bookId: string;
    userToken: string;
}) => {
    let [bookData, setBookData] = useState(bookDataInitialValues);
    let [image, setImage] = useState("");
    let [cardStatus, toggleCardStatus] = useState(componentStatusInitialValues);

    useEffect(() => {
        if (bookId) {
            BookService.getBookDetails(bookId, userToken).then(
                (data: FetchedBookDetails) => {
                    console.log(cardStatus.isLoading)
                    setBookData(data);
                    setImage(createImageBlob(data.image.buffer.data));
                    toggleCardStatus({ ...cardStatus, isLoading: false });
                }
            );
        }
    }, [bookId, userToken]);

    return (
        <div className={styles["book-card"]}>
            {(cardStatus.isLoading && <LoadingOverlay />) || (
                <NavLink
                    target="_self"
                    to={`/book/${bookData.bookDetails._id}`}
                >
                    <div className={styles["book__image"]}>
                        <ImageContainer imageObject={image} />
                    </div>
                    <div className={styles["book__basic-details"]}>
                        <BookCardInfoDisplay
                            bookDetails={bookData.bookDetails}
                        />
                    </div>
                </NavLink>
            )}
        </div>
    );
};
