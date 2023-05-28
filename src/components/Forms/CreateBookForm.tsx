import { FormEvent, useState } from "react";
import { ImageInputContainer } from "../Inputs/ImageInputContainer";
import { BookFormInputs } from "./BookFormInputs";
import { bookDetailsInitialValues } from "../../constants/defaultValues";

import BookService from "../../Services/BookService";
import styles from "./CreateBookForm.module.css";
import { useNavigate } from "react-router-dom";

export const CreateBookForm = ({
    user,
    setToastMessage,
    toggleToast,
}: {
    user: UserSession;
    toggleToast: Function;
    setToastMessage: Function;
}) => {
    let [bookDetails, setBookDetails] = useState(bookDetailsInitialValues);
    let [imageBlob, setImageBlob] = useState(null as null | File);
    const navigate = useNavigate()

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData();

        if (imageBlob) {
            formData.append("imageField", imageBlob);
            formData.append("bookDetails", JSON.stringify(bookDetails));

            BookService.createBook(formData, user.token)
                .then(() => {
                    navigate("/")
                })
                .catch(({ response }) => {
                    toggleToast(true);
                    setToastMessage(response.data.message);
                });
        }
    }

    function handleBookDataChange(event: React.ChangeEvent<HTMLElement>) {
        let target = event.target;
        if (
            target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement ||
            target instanceof HTMLSelectElement
        ) {
            setBookDetails({ ...bookDetails, [target.name]: target.value });
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
                    handleBookDataChange={handleBookDataChange}
                />
            </div>
        </form>
    );
};
