import { FileInput } from "./FileInput";
import { InputContainer } from "./InputContainer";
import styles from "./ImageInputContainer.module.css";
import { ChangeEvent, useState } from "react";
import { ImageContainer } from "../Containers/ImageContainer";

export const ImageInputContainer = () => {
    let [imageBlob, setImageBlob] = useState(null as null | File);
    let [imageObject, setImageObject] = useState("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        if (target instanceof HTMLInputElement) {
            let files = target.files;
            if (files && files[0] instanceof File) {
                let image = files[0];
                setImageBlob(image);
                setImageObject(URL.createObjectURL(image));
            }
        }
    }

    return (
        <div className={styles["image-container"]}>
            <ImageContainer imageObject={imageObject} />
            <InputContainer className={styles["input-container"]}>
                <FileInput
                    acceptedExtensions=".png, .jpg"
                    inputName="cover_image"
                    onChange={handleChange}
                />
            </InputContainer>
        </div>
    );
};
