import { FormEvent, useEffect, useState } from "react";
import { BookFormInputs } from "../Forms/BookFormInputs";
import { useNavigate, useParams } from "react-router-dom";
import { bookDetailsDefaultValue } from "../../constants/defaultValues";
import BookService from "../../Services/BookService";
import styles from "./EditBook.module.css";

export const EditBook = ({ user }: { user: UserSession }) => {
    let [bookData, setBookData] = useState(bookDetailsDefaultValue);
    let { id } = useParams();
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (id) {
            BookService.updateBook(id, user.token, bookData.bookDetails).then(() => {
                navigate(`/book/${id}`);
            });
        }
    }

    useEffect(() => {
        if(!user.isLogged){
            navigate("/login")
        }
    }, [user])
    useEffect(() => {
        if (id) {
            BookService.getBookDetails(id, user.token).then(setBookData);
        }
    }, [id, user]);

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
                            bookData={bookData.bookDetails}
                            setBookData={setBookData}
                        />
                    </form>
                </div>
            </section>
        </main>
    );
};
