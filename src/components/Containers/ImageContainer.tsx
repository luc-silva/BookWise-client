import styles from "./ImageContainer.module.css";

export const ImageContainer = ({ imageObject }: { imageObject: string }) => {
    return <img src={imageObject} className={styles["image"]}> 
    </img>;
};
