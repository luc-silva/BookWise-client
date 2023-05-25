import { FormEvent, useEffect, useState } from "react";
import { BookFormInputs } from "../Forms/BookFormInputs.module";
import { useNavigate, useParams } from "react-router-dom";
import { bookDetailsDefaultValue } from "../../constants/defaultValues";
import BookService from "../../Services/BookService";
import styles from "./EditBook.module.css";

export const EditBook = ({ token }: { token: string }) => {
    let [bookData, setBookData] = useState(bookDetailsDefaultValue);
    let { id } = useParams();
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (id) {
            BookService.updateBook(id, token, bookData).then(() => {
                navigate(`/book/${id}`);
            });
        }
    }

    useEffect(() => {
        if (id) {
            BookService.getBookDetails(id, token).then(setBookData);
        }
    }, [id, token]);

    return (
        <main className={styles["edit-book"]}>
            <section className={styles["edit-book__main"]}>
                <div className={styles["edit-book__title"]}>
                    <h2>Edit Book Info</h2>
                </div>
                <div className={styles["edit-book__form"]}>
                    <form
                        action="POST"
                        onSubmit={handleSubmit}
                    >
                        <BookFormInputs
                            bookData={bookData}
                            setBookData={setBookData}
                        />
                    </form>
                </div>
            </section>
        </main>
    );
};
