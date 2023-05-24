import { ChangeEvent } from "react";
import { DateInput } from "../Inputs/DateInput";
import { ExtendedInputContainer } from "../Inputs/ExtendedInputContainer";
import { InputContainer } from "../Inputs/InputContainer";
import { NumberInput } from "../Inputs/NumberInput";
import { TextInput } from "../Inputs/TextInput";
import { TextareaInput } from "../Inputs/TextareaInput";
import styles from "./BookFormInputs.module.css";

export const BookFormInputs = ({
    bookData,
    setBookData,
}: {
    bookData: BookDetails;
    setBookData: Function;
}) => {
    function handleBookDataChange(event: ChangeEvent<HTMLElement>) {
        let target = event.target;
        if (
            target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement
        ) {
            setBookData({ ...bookData, [target.name]: target.value });
        }
    }
    return (
        <>
            <InputContainer className={styles["input-container"]}>
                <TextInput
                    actualState={bookData.title}
                    inputName="title"
                    label
                    labelText="Title"
                    placeholder
                    placeholderText="Dom Quixote"
                    maxLenght={15}
                    minLenght={1}
                    onChange={handleBookDataChange}
                />
            </InputContainer>
            <InputContainer className={styles["input-container"]}>
                <TextInput
                    actualState={bookData.book_author}
                    inputName="book_author"
                    label
                    labelText="Author"
                    placeholder
                    placeholderText="HP Lovercraft"
                    maxLenght={15}
                    minLenght={1}
                    onChange={handleBookDataChange}
                />
            </InputContainer>
            <ExtendedInputContainer
                className={styles["extended-input-container"]}
                innerClassName={styles["input-container"]}
            >
                <NumberInput
                    actualState={bookData.pages}
                    inputName="pages"
                    label
                    labelText="Pages"
                    placeholder
                    placeholderText="123"
                    maxValue={1000}
                    onChange={handleBookDataChange}
                />
                <TextInput
                    actualState={bookData.volume}
                    inputName="volume"
                    label
                    labelText="Volume"
                    placeholder
                    placeholderText="III"
                    maxLenght={15}
                    onChange={handleBookDataChange}
                />
            </ExtendedInputContainer>{" "}
            <ExtendedInputContainer
                className={styles["extended-input-container"]}
                innerClassName={styles["input-container"]}
            >
                <TextInput
                    actualState={bookData.edition}
                    inputName="edition"
                    label
                    labelText="Edition"
                    placeholder
                    placeholderText="Forth Edition"
                    maxLenght={15}
                    minLenght={1}
                    onChange={handleBookDataChange}
                />
                <DateInput
                    actualState={bookData.released_date}
                    inputName="released_date"
                    label
                    labelText="Release Date"
                    placeholder
                    placeholderText="10/08/1980"
                    onChange={handleBookDataChange}
                />
            </ExtendedInputContainer>
            <InputContainer className={styles["input-container"]}>
                <TextInput
                    actualState={bookData.tags}
                    inputName="tags"
                    label
                    labelText="Tags"
                    placeholder
                    placeholderText="horror, fiction"
                    maxLenght={15}
                    minLenght={1}
                    onChange={handleBookDataChange}
                />
            </InputContainer>
            <InputContainer className={styles["input-container"]}>
                <TextInput
                    actualState={bookData.franchise}
                    inputName="franchise"
                    label
                    labelText="Franchise"
                    placeholder
                    placeholderText="Rangers"
                    maxLenght={15}
                    minLenght={1}
                    onChange={handleBookDataChange}
                />
            </InputContainer>
            <InputContainer className={styles["input-container"]}>
                <TextareaInput
                    actualState={bookData.description}
                    inputName="description"
                    maxLenght={250}
                    onChange={handleBookDataChange}
                    label
                    labelText="Description"
                />
            </InputContainer>
            <div className={styles["book-form__submit"]}>
                <input
                    className={styles["submit"]}
                    type="submit"
                    value="Adicionar Livro"
                />
            </div>
        </>
    );
};
