import { ExtendedInputContainer } from "../Inputs/ExtendedInputContainer";
import { ImageInputContainer } from "../Inputs/ImageInputContainer";
import { InputContainer } from "../Inputs/InputContainer";
import { NumberInput } from "../Inputs/NumberInput";
import { TextInput } from "../Inputs/TextInput";
import { TextareaInput } from "../Inputs/TextareaInput";
import styles from "./CreateBookForm.module.css";

export const CreateBookForm = () => {
    return (
        <form
            action="POST"
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className={styles["book-form"]}
        >
            <div className={styles["book-form__book-cover"]}>
                <ImageInputContainer />
            </div>
            <div className={styles["book-form__book-details"]}>
                <InputContainer className={styles["input-container"]}>
                    <TextInput
                        actualState=""
                        inputName="title"
                        label
                        labelText="Title"
                        placeholder
                        placeholderText="Dom Quixote"
                        maxLenght={15}
                        minLenght={1}
                        onChange={() => {}}
                    />
                </InputContainer>
                <InputContainer className={styles["input-container"]}>
                    <TextInput
                        actualState=""
                        inputName="author"
                        label
                        labelText="Author"
                        placeholder
                        placeholderText="HP Lovercraft"
                        maxLenght={15}
                        minLenght={1}
                        onChange={() => {}}
                    />
                </InputContainer>
                <ExtendedInputContainer
                    className={styles["extended-input-container"]}
                    innerClassName={styles["input-container"]}
                >
                    <NumberInput
                        actualState=""
                        inputName="pages"
                        label
                        labelText="Pages"
                        placeholder
                        placeholderText="123"
                        maxValue={1000}
                        onChange={() => {}}
                    />
                    <NumberInput
                        actualState=""
                        inputName="volume"
                        label
                        labelText="Volume"
                        placeholder
                        placeholderText="III"
                        maxValue={1000}
                        onChange={() => {}}
                    />
                </ExtendedInputContainer>
                <InputContainer className={styles["input-container"]}>
                    <TextInput
                        actualState=""
                        inputName="tags"
                        label
                        labelText="Tags"
                        placeholder
                        placeholderText="horror, fiction"
                        maxLenght={15}
                        minLenght={1}
                        onChange={() => {}}
                    />
                </InputContainer>
                <InputContainer className={styles["input-container"]}>
                    <TextInput
                        actualState=""
                        inputName="franchise"
                        label
                        labelText="Franchise"
                        placeholder
                        placeholderText="Rangers"
                        maxLenght={15}
                        minLenght={1}
                        onChange={() => {}}
                    />
                </InputContainer>
                <InputContainer className={styles["input-container"]}>
                    <TextareaInput
                        actualState=""
                        inputName="description"
                        maxLenght={250}
                        onChange={() => {}}
                        label
                        labelText="Description"
                    />
                </InputContainer>
            </div>
        </form>
    );
};
