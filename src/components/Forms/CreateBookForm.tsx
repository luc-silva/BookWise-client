import { FormEvent, useState } from "react";
import { ImageInputContainer } from "../Inputs/ImageInputContainer";

import { createBookFormDefaultValues } from "../../constants/defaultValues";

import BookService from "../../Services/BookService";
import styles from "./CreateBookForm.module.css";
import { BookFormInputs } from "./BookFormInputs.module";

export const CreateBookForm = ({ user }: { user: UserSession }) => {
    let [bookDetails, setBookDetails] = useState(createBookFormDefaultValues);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        BookService.createBook(bookDetails, user.token).then((data) => {
            console.log(data);
        });
    }

    return (
        <form
            action="POST"
            onSubmit={handleSubmit}
            className={styles["book-form"]}
        >
            <div className={styles["book-form__book-cover"]}>
                <ImageInputContainer />
            </div>
            <div className={styles["book-form__book-details"]}>
                <BookFormInputs bookData={bookDetails} setBookData={setBookDetails} />
            </div>
        </form>
    );
};
