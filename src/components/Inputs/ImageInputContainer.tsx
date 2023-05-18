import { FileInput } from "./FileInput";
import { InputContainer } from "./InputContainer";
import styles from "./ImageInputContainer.module.css";

export const ImageInputContainer = () => {
    return (
        <div className={styles["image-container"]}>
            <img src="" alt="" />
            <InputContainer className={styles["input-container"]}>
                <FileInput
                    acceptedExtensions="png jpg"
                    actualState=""
                    inputName="cover_image"
                    onChange={() => {}}
                />
            </InputContainer>
        </div>
    );
};
