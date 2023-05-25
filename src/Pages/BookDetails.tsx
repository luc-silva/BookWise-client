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

export const BookDetails = ({ user }: { user: UserSession }) => {
    let [bookDetails, setBookDetails] = useState(bookDetailsDefaultValue);
    let { id } = useParams();
    const navigate = useNavigate();
    
    function deleteBook() {
        if (id) {
            BookService.deleteBook(id, user.token).then(() => {
                navigate("/bookshelf");
            });
        }
    }
    
    useEffect(() => {
        if(!user.isLogged){
            navigate("/login")
        }
    })
    useEffect(() => {
        if (id) {
            BookService.getBookDetails(id, user.token).then(setBookDetails);
        }
    }, [id, user]);
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
                    {bookDetails.store_url && (
                        <ExternalLinkButton
                            buttonText="Buy book"
                            href={bookDetails.store_url}
                        />
                    )}
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
