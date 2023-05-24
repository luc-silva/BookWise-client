import { ChangeEvent, FormEvent, useState } from "react";
import { ExtendedInputContainer } from "../Inputs/ExtendedInputContainer";
import { ImageInputContainer } from "../Inputs/ImageInputContainer";
import { InputContainer } from "../Inputs/InputContainer";
import { NumberInput } from "../Inputs/NumberInput";
import { TextInput } from "../Inputs/TextInput";
import { TextareaInput } from "../Inputs/TextareaInput";
import { createBookFormDefaultValues } from "../../constants/defaultValues";

import BookService from "../../Services/BookService";
import styles from "./CreateBookForm.module.css";
import { DateInput } from "../Inputs/DateInput";

export const CreateBookForm = ({ user }: { user: UserSession }) => {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        BookService.createBook(bookDetails, user.token).then((data) => {
            console.log(data);
        });
    }
    function handleBookDetailsChange(event: ChangeEvent<HTMLElement>) {
        let target = event.target;
        if (
            target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement
        ) {
            setBookDetails({ ...bookDetails, [target.name]: target.value });
        }
    }
    let [bookDetails, setBookDetails] = useState(createBookFormDefaultValues);

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
                <InputContainer className={styles["input-container"]}>
                    <TextInput
                        actualState={bookDetails.title}
                        inputName="title"
                        label
                        labelText="Title"
                        placeholder
                        placeholderText="Dom Quixote"
                        maxLenght={15}
                        minLenght={1}
                        onChange={handleBookDetailsChange}
                    />
                </InputContainer>
                <InputContainer className={styles["input-container"]}>
                    <TextInput
                        actualState={bookDetails.book_author}
                        inputName="book_author"
                        label
                        labelText="Author"
                        placeholder
                        placeholderText="HP Lovercraft"
                        maxLenght={15}
                        minLenght={1}
                        onChange={handleBookDetailsChange}
                    />
                </InputContainer>
                <ExtendedInputContainer
                    className={styles["extended-input-container"]}
                    innerClassName={styles["input-container"]}
                >
                    <NumberInput
                        actualState={bookDetails.pages}
                        inputName="pages"
                        label
                        labelText="Pages"
                        placeholder
                        placeholderText="123"
                        maxValue={1000}
                        onChange={handleBookDetailsChange}
                    />
                    <TextInput
                        actualState={bookDetails.volume}
                        inputName="volume"
                        label
                        labelText="Volume"
                        placeholder
                        placeholderText="III"
                        maxLenght={15}
                        onChange={handleBookDetailsChange}
                    />
                </ExtendedInputContainer>{" "}
                <ExtendedInputContainer
                    className={styles["extended-input-container"]}
                    innerClassName={styles["input-container"]}
                >
                    <TextInput
                        actualState={bookDetails.edition}
                        inputName="edition"
                        label
                        labelText="Edition"
                        placeholder
                        placeholderText="Forth Edition"
                        maxLenght={15}
                        minLenght={1}
                        onChange={handleBookDetailsChange}
                    />
                    <DateInput
                        actualState={bookDetails.released_date}
                        inputName="released_date"
                        label
                        labelText="Release Date"
                        placeholder
                        placeholderText="10/08/1980"
                        onChange={handleBookDetailsChange}
                    />
                </ExtendedInputContainer>
                <InputContainer className={styles["input-container"]}>
                    <TextInput
                        actualState={bookDetails.tags}
                        inputName="tags"
                        label
                        labelText="Tags"
                        placeholder
                        placeholderText="horror, fiction"
                        maxLenght={15}
                        minLenght={1}
                        onChange={handleBookDetailsChange}
                    />
                </InputContainer>
                <InputContainer className={styles["input-container"]}>
                    <TextInput
                        actualState={bookDetails.franchise}
                        inputName="franchise"
                        label
                        labelText="Franchise"
                        placeholder
                        placeholderText="Rangers"
                        maxLenght={15}
                        minLenght={1}
                        onChange={handleBookDetailsChange}
                    />
                </InputContainer>
                <InputContainer className={styles["input-container"]}>
                    <TextareaInput
                        actualState={bookDetails.description}
                        inputName="description"
                        maxLenght={250}
                        onChange={handleBookDetailsChange}
                        label
                        labelText="Description"
                    />
                </InputContainer>
                <div className={styles["book-form__submit"]}>
                    <input type="submit" value="Adicionar Livro" />
                </div>
            </div>
        </form>
    );
};
