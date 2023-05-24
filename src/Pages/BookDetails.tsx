import { useEffect, useState } from "react";
import { Button } from "../components/Buttons/Button";
import { BookDetailsTitleDisplay } from "../components/Display/BookDetailsTitleDisplay";
import { useNavigate, useParams } from "react-router-dom";
import { bookDetailsDefaultValue } from "../constants/defaultValues";
import { ExternalLinkButton } from "../components/Buttons/ExternalLinkButton";
import BookService from "../Services/BookService";
import styles from "./BookDetails.module.css";
import { BookMiscInfoDisplay } from "../components/Display/BookMiscInfoDisplay";
import { BookAboutDisplay } from "../components/Display/BookAboutDisplay";

export const BookDetails = ({ token }: { token: string }) => {
    let [bookDetails, setBookDetails] = useState(bookDetailsDefaultValue);
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            BookService.getBookDetails(id, token).then(setBookDetails);
        }
    }, [id, token]);

    function deleteBook() {
        if (id) {
            BookService.deleteBook(id, token).then(() => {
                navigate("/bookshelf")
            });
        }
    }

    return (
        <main className={styles["book-details"]}>
            <aside className={styles["book__aside-info"]}>
                <div className={styles["book__image__container"]}>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className={styles["book__external-links"]}>
                    <ExternalLinkButton
                        filled
                        buttonText="Edit"
                        href={`/book/${id}/edit`}
                        targetSelf
                    />
                    <ExternalLinkButton
                        buttonText="Buy book"
                        href={bookDetails.store_url}
                    />
                </div>
                <div className={styles["book__misc"]}>
                    <BookMiscInfoDisplay bookDetails={bookDetails} />
                </div>
            </aside>

            <section className={styles["book-details__main"]}>
                <div className={styles["book-details__info"]}>
                    <BookDetailsTitleDisplay bookDetails={bookDetails} />
                </div>
                <div className={styles["book-details__about"]}>
                    <BookAboutDisplay bookDetails={bookDetails} />
                </div>

                <div className={styles["button-panel"]}>
                    <Button onClick={deleteBook} text="Delete" type="remove" />
                </div>
            </section>
        </main>
    );
};
