import { FormEvent, useState } from "react";
import { ImageInputContainer } from "../Inputs/ImageInputContainer";
import { BookFormInputs } from "./BookFormInputs";
import { createBookFormDefaultValues } from "../../constants/defaultValues";

import BookService from "../../Services/BookService";
import styles from "./CreateBookForm.module.css";

export const CreateBookForm = ({ user }: { user: UserSession }) => {
    let [bookDetails, setBookDetails] = useState(createBookFormDefaultValues);
    let [imageBlob, setImageBlob] = useState(null as null | File);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData();

        if (imageBlob) {
            formData.append("imageField", imageBlob);
            formData.append("bookDetails", JSON.stringify(bookDetails))

            BookService.createBook(formData, user.token).then((data) => {
                console.log(data);
            });
        }
    }

    return (
        <form
            action="POST"
            onSubmit={handleSubmit}
            className={styles["book-form"]}
        >
            <div className={styles["book-form__book-cover"]}>
                <ImageInputContainer
                    setImageBlob={setImageBlob}
                    imageBlob={imageBlob}
                />
            </div>
            <div className={styles["book-form__book-details"]}>
                <BookFormInputs
                    bookData={bookDetails}
                    setBookData={setBookDetails}
                />
            </div>
        </form>
    );
};
